import { Toaster } from "react-hot-toast";

import './App.css'
import MessagesContainer from './components/messages/MessagesContainer'
import SideBar from './components/sidebar/SideBar'


function App() {

  return (
    <>
      <h2 className="title">Type something and have fun</h2>
      <div className="container">
        <SideBar />
        <MessagesContainer />
      </div>
      <Toaster />
    </>
  )
}

export default App
