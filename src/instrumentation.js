import { connectDb } from "./lib/db/connectDb"

export async function register() {
    await connectDb()
    console.log("Done Instrumentation")
}