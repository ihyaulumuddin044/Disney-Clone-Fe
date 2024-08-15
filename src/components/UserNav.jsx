import React, { useEffect } from "react";
import user from "/public/img/user.jpg";
import { useState, useRef } from "react";
import { ProfileInfo } from "../Services/ProfileInfo";
function UserNav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navRef = useRef(null);
  const hendleToggleMenuOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setToggleMenu(false);
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", hendleToggleMenuOutside);
    return () => {
      document.removeEventListener("mousedown", hendleToggleMenuOutside);
    };
  }, []);


  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div Ref={navRef} className="flex flex-col relative">
      <img src={user} alt="" className="w-[40px] rounded-full cursor-pointer relative bg-none" onClick={handleToggleMenu} />
      <div className="absolute top-8 right-0 mt-4 p-3 text-left text-white z-40">
      {toggleMenu &&
        ProfileInfo.map((item, index) => (
            <div className="bg-slate-400">
          <div
            key={index}
            className="relative flex-wrap  right-0 bg-black border-x-2 border-y-2  p-3 text-left text-sm sm:text-2xl  text-white overflow-visible z-50"
          >
            <p className="cursor-pointer hover:underlinen">{item.name}</p>
            </div>
            </div>
        ))}
        </div>
    </div>
  );
}

export default UserNav;
