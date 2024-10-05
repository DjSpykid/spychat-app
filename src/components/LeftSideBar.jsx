// import React from 'react'
import assets from "./../assets/assets";

function LeftSideBar() {
  return (
    <aside className="bg-[#001030] text-white h-[75vh]">
      {/* LEFT SIDEBAR AT THE TOP */}
      <div className="p-5">
        {/* LEFT SIDE BAR NAV */}
        <nav className="flex justify-between -ml-3 items-center">
            <div className="flex gap-1">
            <img src={assets.logo_icon} alt="Logo" className="w-20 h-20" />
            <h2 className="mt-6 -ml-1 tracking-tight font-extrabold text-transparent text-3xl bg-clip-text bg-white shadow-lg drop-shadow-lg md:drop-shadow-md">SPYCHAT</h2>
            </div>
     
          {/* MENU */}
          <div className="relative group pt-3 pb-0 ">
            <img
              src={assets.menu_icon}
              alt="Menu Icon"
              className="h-5 mt-2 cursor-pointer opacity-80"
            />
            {/* SUB MENU */}
            <div className="absolute top-[100%] right-0 w-36 p-5 rounded bg-white text-black hidden group-hover:block">
              <p className="cursor-pointer text-lg">Edit Profile</p>
              <hr className="border-2  bg-[#a4a4a4] mt-2 mb-0" />
              <p>Logout</p>
            </div>
          </div>
        </nav>
        {/* LEFT SIDE BAR SEARCH */}
        <div className="bg-[#002670] flex items-center gap-3 py-2 px-4 mt-4 rounded-md shadow-md">
         <img src={assets.search_icon} alt="Search Icon" className="w-5 h-5" />
         <input
        type="text"
         placeholder="Search here..."
         className="bg-transparent border-none outline-none text-white text-base placeholder:text-[#c8c8c8] flex-grow"
          />
</div>

      </div>
      {/* LEFT SIDE LIST */}
      <div className="flex flex-col h-[70%] overflow-y-scroll">
        {Array(1)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-3 pt-3 pb-5 cursor-pointer text-sm hover:bg-[#077eff] transition duration-300 ml-4"
            >
              <img
                src={assets.profile_img}
                alt="Profile Image"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex flex-col">
                <p>Opanuga Daniel</p>
                <span className="text-[#9f9f9f] text-sm hover:text-white">
                I Love You Guys
                </span>
              </div>
            </div>
          ))}
      </div>
    </aside>
  );
}

export default LeftSideBar;
