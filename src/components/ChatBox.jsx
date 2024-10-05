// import React from 'react';
import assets from "./../assets/assets";

function ChatBox() {
  return (
    // CHATBOX
    <div className="h-[75vh] flex flex-col bg-[#f1f5ff] relative">
        {/* CHAT USER */}
        <div className="pt-3 pb-4 flex items-center gap-3 border-b-2 border-b-[#c6c6c6]">
          <img src={assets.profile_img} alt="User Profile" className="w-16 mt-1 ml-2 rounded-full"/>
          <p className="flex-1 font-medium text-xl text-[#393939] flex items-center gap-1">
            Opanuga Daniel
            <img className="dot" src={assets.green_dot} alt="Online Status" />
          </p>
          <img src={assets.help_icon} alt="Help Icon" className="w-7" />
        </div>
       
         {/* CHAT MESSAGE */}
         <div className="h-[calc(100%-4rem)] pb-12 overflow-scroll flex flex-col-reverse">
  {/* SENDER MESSAGE */}
  <div className="flex items-end justify-end gap-2 pb-4 pt-0">
    {/* Message */}
    <p className=" rounded-xl text-white bg-[#077eff] p-3 max-w-52 text-sm font-light rounded-[8px 8px 0px 8px]">
      I Love You Guys 
    </p>
    <div className="flex flex-col items-center text-center text-xs">
      <img className="w-7 rounded-full" src={assets.profile_img} alt="Sender" />
      <p className="text-xs text-gray-500">2:30pm</p>
    </div>
  </div>

  {/* SENDER MESSAGE TWO */}
  <div className="flex items-end justify-end gap-2 pb-4 pt-0">
    {/* Message IMAGE */}
   <img src={assets.pic1} alt="" className="max-w-60 mt-8 rounded-xl" />
    <div className="flex flex-col items-center text-center text-xs">
      <img className="w-7 rounded-full" src={assets.profile_img} alt="Sender" />
      <p className="text-xs text-gray-500">2:30pm</p>
    </div>
  </div>


  {/* RECEIVER MESSAGE */}
  <div className="flex items-end justify-start gap-2 pb-4 pt-0">
    {/* Message */}
    <p className=" rounded-xl text-[#393939] bg-[#e5e5ea] p-3 max-w-52 text-sm font-light rounded-[8px 8px 8px 0px]">
    We love you DJSPYKID
    </p>
    <div className="flex flex-col items-center text-center text-xs">
      <img className="w-7 rounded-full" src={assets.profile_img} alt="Receiver" />
      <p className="text-xs text-gray-500">2:30pm</p>
    </div>
  </div>
</div>










        {/* CHAT INPUT */}
        <div className="flex items-center gap-3 pt-3 pb-4 bg-white mt-auto">
          <input 
            type="text" 
            placeholder="Send a message" 
            className="flex-1 border border-gray-300 rounded-md px-3 py-2 outline-none ml-3" 
          />
          <input 
            type="file" 
            accept="image/png, image/jpeg" 
            hidden 
            id="image" 
            className="flex-1 border-none outline-none"
          />
          <label htmlFor="image" className="flex cursor-pointer">
            <img src={assets.gallery_icon} alt="Attach Image" className="w-6" />
          </label>
          <img src={assets.send_button} alt="Send Message" className="w-8 cursor-pointer hover:opacity-80 transition-opacity duration-200" />
        </div>
    </div>
  );
}

export default ChatBox;
