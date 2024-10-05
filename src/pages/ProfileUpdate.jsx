// import React from 'react'
import { useState } from "react";
import assets from "./../assets/assets";
function ProfileUpdate() {
  const [image, setImage] = useState(false)
  const changePicHanler = (event)=>{
    setImage(event.target.files[0])
  }
  return (
    // PROFILE
    <div className="min-h-screen bg-cover background flex items-center justify-center">
        {/* PROFILE CONTAINER */}
        <div  className="bg-white flex items-center justify-between min-w-[700px] text-xs">
          <form className="flex flex-col gap-5 p-10">
            <h3 className="font-medium">Profile Details</h3>
            <label htmlFor="profile" className="flex items-center gap-3 text-gray-900 cursor-pointer">
              <input onChange={changePicHanler} className="p-3 min-w-[300px] border-2 border-[#077eff]" type="file" id="profile" accept=".png, .jpg, .jpeg" hidden />
              <img src={image ? URL.createObjectURL(image): assets.avatar_icon} alt="" className="w-14 rounded-full object-cover" />
              Upload profile image
            </label>
            <input className="p-3 min-w-[300px] border-2 border-[#077eff]" type="text" placeholder="Your name " required />
            <textarea  className="p-3 min-w-[300px] border-2 border-[#077eff]" placeholder="Write profile bio" required></textarea>
             <button type="submit" className="border-none bg-[#077eff] text-white text-sm font-light py-4 px-4 rounded-md cursor-pointer hover:bg-[#005bb5] transition-all duration-300">
              Save
              </button>
          </form>
          {/* LOGO CONTAINER */}
          <div className="flex flex-col gap-2 mr-10">
          <img src={image ? URL.createObjectURL(image) : assets.logo_icon} alt=""  className="max-w-40  my-auto rounded-full"/>
        {image ? "" : 
          <h2 className="tracking-tight ml-3 font-extrabold text-transparent text-3xl bg-clip-text bg-blue-500 drop-shadow-lg md:drop-shadow-md">SPYCHAT</h2>
        }
          </div>
        </div>
    </div>
  )
}

export default ProfileUpdate