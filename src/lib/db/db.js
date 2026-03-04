import User from "./models/User";

export async function addUser({ user, profile }) {
    try {
        const users = await User.find({ email: user.email })
        if (!users.length) {
            await User.create({ ...user, profile })
            return { status: 200, message: "User created successfully" }
        }
        return { status: 200, message: "User Exist" }
    } catch (error) {
        return { status: 500, message: error.message }
    }
}

export async function getUsers(query = null) {
    try {
        const users = await User.find({ query })
        return { status: 200, users }
    } catch (error) {
        return { status: 500, message: error.message }
    }
}

export async function getMe(email) {
    try {
        const user = await User.findOne({ email })
        if (user) {
            return { status: 200, user: user.profile }
        }
        return { status: 404, message: "User not found" }
    } catch (error) {
        return { status: 500, message: error.message }
    }
}