import mongoose from "mongoose"

export async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connected successfully");
    } catch (error) {
        console.error(error.message);
    }
}

