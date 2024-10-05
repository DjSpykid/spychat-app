// import React from 'react'

import assets from "../assets/assets"

function RightSideBar() {
  return (
    // RIGHT-SIDE BART
    <div className="text-white bg-[#001030] relative h-[75vh] overflow-y-scroll">
        {/* RIGHT SIDE-BAR PROFILE */}
         <div className="pt-16  text-center max-w-[70%] mx-auto">
          <img src={assets.profile_img} alt="" className="ml-5 w-28 rounded-full" />
          <h3 className="font-normal text-md tracking-tight flex items-center justify-center gap-1 mt-1 mb-0">
            Damilare Bello 
            <img src={assets.green_dot} alt="" />
            </h3>
          <p className=" text-xs opacity-85 font-light">Hey, There i am Damilare Bello Using <em>SPYCHAT</em></p>
         </div>
         <hr className="border-[#ffffff50] mt-4 mb-0"/>
         {/*RIGHT-SIDE-BAR MEDIA   */}
         <div className="p-2 text-md">  
          <p>Media</p>
          <div className="max-h-48 grid overflow-y-scroll gridrightsidebar gap-1 mt-2">
            <img src={assets.pic1} alt=""  className="w-16 rounded cursor-pointer"/>
            <img src={assets.pic2} alt="" className="w-16 rounded cursor-pointer" />
            <img src={assets.pic3} alt="" className="w-16 rounded cursor-pointer" />
            <img src={assets.pic4} alt=""  className="w-16 rounded cursor-pointer"/>
            <img src={assets.pic1} alt="" className="w-16 rounded cursor-pointer" />
            <img src={assets.pic2} alt="" className="w-16 rounded cursor-pointer" />
          </div>
         </div>
         <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-[#077eff] text-white text-sm font-light py-2 px-4 rounded-md cursor-pointer hover:bg-[#005bb5] transition-all duration-300">
              Logout
            </button>

    </div>
  )
}

export default RightSideBar