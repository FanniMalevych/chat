import { create } from "zustand";

const useListConversations = create((set) => ({
	conversations: [],
    addConversation: (conversation) => set((state) => ({ conversations: [...state.conversations, conversation]})),
	setConversations:  (conversations) => set({ conversations }),
    deleteConversation: (conversationId) => set((state) => {
        const conversations = state.conversations.filter((conversation) => conversation._id !== conversationId);
        return { conversations, filteredConversations: conversations };
    }),
    updateConversation: (conversation) => set((state) => {
        const updConv = state.conversations.map((conv) => {
            if (conv._id === conversation._id) {
                return {
                    ...conv,
                    firstName: conversation.firstName,
                    lastName: conversation.lastName
                }
                } else {
                    return conv;
                }
            })
            return { conversations: updConv, filteredConversations: updConv };
        }),
    filteredConversations: [],
    setFilteredConversations: (filteredConversations) => set({ filteredConversations }),
    
}));

export default useListConversations;