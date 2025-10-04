import mongoose from 'mongoose';


export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION_STRING)
        console.log('CONNECTION SUCCESSFULLY');

    } catch (error) {
        console.error(`Something happened ${error}`)
        process.exit(1) //exit with failure
    }
}