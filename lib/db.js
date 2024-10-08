import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.NODE_ENV === 'development' ? process.env.MONGODB_URI : process.env.MONGODB_URI_VERCEL;
const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
        tls: true,
    }
);


const writeData = async (params ) => {
    try {
        await client.connect();
        const db = client.db(process.env.DB_NAME);
        const coll = db.collection(params.collection);
        await coll.insertMany(params.data);
    } finally {
        await client.close();

    }
}

const readDataMany = async (params) => {
    try {
        await client.connect();
        const db = client.db(process.env.DB_NAME);
        const coll = db.collection(params.collection);
        const res = await coll.find(params.query).toArray()
        return res.map((obj) => {
            delete obj['_id']
            return obj
        })
    } finally {
        await client.close()
    }
}

const readDataOne = async (params) => {
    try {
        await client.connect();
        const db = client.db(process.env.DB_NAME);
        const coll = db.collection(params.collection);
        const res = await coll.findOne(params.query)
        return res

    } finally {
        await client.close()
    }
}



const updateDataOne = async (params) => {
    try {
        await client.connect()
        const db = client.db(process.env.DB_NAME);
        const coll = db.collection(params.collection);
        const res = await coll.updateOne(params.query, {
            $set: params.newdata
        })
        return res
    } finally {
        await client.close()
    }
}


const deleteDataMany = async (params) => {
    try {
        await client.connect();
        const db = client.db(process.env.DB_NAME)
        const coll = db.collection(params.collection)
        const res = await coll.deleteMany(params.query)
        return res
    } finally {
        await client.close();
    }
}
const deleteDataOne = async (params) => {
    try {
        await client.connect();
        const db = client.db(process.env.DB_NAME)
        const coll = db.collection(params.collection)
        const res = await coll.deleteOne(params.query)
        return res
    } finally {
        await client.close();
    }
}


const readDataManyMultiple = async (params) => {
    try {
        await client.connect();
        const db = client.db(process.env.DB_NAME);
        let data= {}
        await Promise.all(params.map(async (param) => {
            const index = param.collection.split('-')[1]
            const coll = db.collection(param.collection)
            const res= await coll.find(param.query).toArray()
            data[index] = res.map((obj) => {
                delete obj['_id']
                return obj
            })
        }))
        return data
    } finally {
        await client.close()
    }
}

export {
    writeData,
    readDataOne,
    readDataMany,
    updateDataOne,
    deleteDataMany,
    deleteDataOne,
    readDataManyMultiple
}