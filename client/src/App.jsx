import { useState, createContext } from 'react'

import './App.css'
import MessagesContainer from './components/messages/MessagesContainer'
import SideBar from './components/sidebar/SideBar'

export const conversationContext = createContext();

function App() {
  const [conv, setConv] = useState('')

  return (
    <conversationContext.Provider value={[conv, setConv]}>

     <h2>Type smth and have fun</h2>

      <div className="card">
        <SideBar />
       <MessagesContainer />
      </div>
      
      </conversationContext.Provider>
  )
}

export default App
