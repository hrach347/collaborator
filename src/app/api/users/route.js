import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { addProject, getUsers } from "@/lib/controller";

export async function GET() {
    const data = await getUsers()
    return Response.json({ status: 200, users: data.users })
}

export async function POST(req) {
    const session = await getServerSession(authOptions);
    const body = await req.json()
    if (!session.user) {
        return Response.json({ status: 400, message: "Auth failed" })
    }
    if (!body?.project) {
        return Response.json({ status: 400, message: "Project invalid" })
    }
    const response = await addProject({ email: session.user.email, project: body.project })
    if (response.status === 200) {
        return Response.json({ status: 200, project: response.project })
    }
    return { status: response.status, message: response.message }
}