import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    profile: { type: Object }
}, {
    timestamps: true
})

export default mongoose.models.User || mongoose.model("User", UserSchema);