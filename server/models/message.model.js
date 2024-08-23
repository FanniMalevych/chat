import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    conversationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Conversation",
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    ownType: {
        type: Boolean
    }
}, { timestamps: true })

const Message = mongoose.model('Message', messageSchema)

export default Message