import React from 'react'
import SideBar from '../../../components/SideBar/SideBar'
import ChatSection from '../../../components/ChatSection/ChatSection'

const Chat = () => {
  return (
    <>
      <div className="dashboard-page">
        <SideBar />
        <ChatSection />
      </div>
    </>
  )
}

export default Chat
