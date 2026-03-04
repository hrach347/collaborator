import { getUsers } from "@/lib/db/db";

export async function GET() {
    const data = await getUsers()
    return Response.json({ status: 200, users: data.users })
}
