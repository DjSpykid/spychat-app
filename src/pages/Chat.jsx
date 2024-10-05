// import React from 'react'

import ChatBox from "../components/ChatBox"
import LeftSideBar from "../components/LeftSideBar"
import RightSideBar from "../components/RightSideBar"

function Chat() {
  return (
    <div className="min-h-screen items-center justify-center grid backgrounchatcomponent">
        {/* CHAT CONTAINER */}
        <div className="w-full h-[75vh] bg-[aliceblue] grid gridchatcomponent">
         <LeftSideBar />
         <ChatBox />
         <RightSideBar />
        </div>
    </div>
  )
}

export default Chat