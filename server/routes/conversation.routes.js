import express from "express";

import { getConversations, createConversation, updateConversation, deleteConversation } from "../controllers/conversation.controller.js";

const router = express.Router();

router.get('/', getConversations);
router.post('/', createConversation)
router.put('/:id', updateConversation)
router.delete('/:id', deleteConversation)

export default router;
