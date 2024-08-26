import Conversation from "../models/conversation.model.js";

export const getConversations = async (req, res) => {
    try {
        const conversations = await Conversation.find()
		
		res.status(200).json(conversations);
	} catch (error) {
		console.error("Error in getConversations: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
}

export const createConversation = async (req, res) => {
    try {
        const { firstName, lastName } = req.body;

        const newConversation = new Conversation({
            firstName,
            lastName
        })
        if (newConversation) {
            await newConversation.save()

            res.status(201).json({
                _id: newConversation._id,
                firstName: newConversation.firstName,
                lastName: newConversation.lastName
            })
        } else {
            res.status(400).json({error: 'Invalid data'})
        }
        
    } catch (err) {
        console.log(' Error in conversation controller', err.message);
        res.status(500).json({error: 'Error during creating new conversation'})
    }
}

export const updateConversation = async (req, res) => {
    try {
        const { id: conversationId } = req.params      
        const { firstName, lastName } = req.body;
        
        let conversation = await Conversation.findOne({ _id: conversationId})
        if (conversation) {
            conversation.firstName = firstName
            conversation.lastName = lastName

            await conversation.save()
            res.status(200).json('Conversation successfully updated');
        } else {
            res.status(404).json({error: 'Conversation not found'})
        }

    } catch {
        console.log(' Error in conversation controller', err.message);
        res.status(500).json({error: 'Error during updating conversation'})
    }
}

export const deleteConversation = async (req, res) => {
    try {
        const { id: conversationId } = req.params

        const conversation = await Conversation.findOne({ _id: conversationId})
        if (conversation) {
            await conversation.deleteOne()
            res.status(200).json({message: 'Conversation deleted'})
        } else {
            res.status(404).json({error: 'Conversation not found'})
        }

    } catch (err) {
        console.log(' Error in conversation controller', err.message);
        res.status(500).json({error: 'Error during deleting conversation'})
    }
}