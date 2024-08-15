import React, { useEffect, useRef } from "react";
import { useState } from "react";
import logo from "/public/img/logo2.png";
// import user from "/public/img/user.jpg";
import {
  HiHome,
  HiStar,
  HiPlayCircle,
  HiMagnifyingGlass,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import SearchBar from "./Search";
import UserNav from "./UserNav";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMenuVisibleM, setIsMenuVisibleM] = useState(false);

  const menuRef = useRef(null);
  const menuBar = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuVisible(false);
    }
  };

  const handleClickOutsideM = (event) => {
    if (menuBar.current && !menuBar.current.contains(event.target)) {
      setIsMenuVisibleM(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideM);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideM);
    };
  }, []);

  const handleToggleClick = () => {
    setToggle(!toggle);
    setIsMenuVisibleM(false);
  };

  const handleSearchClick = () => {
    setIsMenuVisibleM(!isMenuVisibleM);
    setToggle(false);
  };

  const menu = [
    {
      name: "Home",
      icon: <HiHome />,
    },
    {
      name: "SEARCH",
      icon: <HiMagnifyingGlass />,
    },
    {
      name: "WATCH LIST",
      icon: <HiPlus />,
    },
    {
      name: "ORIGINALS",
      icon: <HiStar />,
    },
    {
      name: "MOVIES",
      icon: <HiPlayCircle />,
    },
    {
      name: "SERIES",
      icon: <HiTv />,
    },
  ];

  return (
      <div className="flex items-center gap-9 justify-between px-6 w-screen">
        <div className="flex gap-9 items-center ">
          <img
            src={logo}
            alt="logo"
            className="w-[80px] md:w-[100px] object-cover"
          />
          <div ref={menuRef} className="hidden md:flex gap-9 min-w-full">
            {menu.map(
              (item, index) =>
                index < 5 && index !== 1 && (
                  <HeaderItem key={index} name={item.name} icon={item.icon} />
                )
            )}
            <button onClick={() => setIsMenuVisible(!isMenuVisible)}>
              {menu.map(
                (item, index) =>
                  index === 1 && (
                    <HeaderItem key={index} name={item.name} icon={item.icon} />
                  )
              )}
            </button>
            {isMenuVisible && (
              <div className="search-dropdown absolute w-[300px] ml-[870px] z-40 right-[350px]">
                <SearchBar />
              </div>
            )}
          </div>
          <div className="flex md:hidden gap-3">
            <div ref={menuBar} className="flex relative">
              {menu.map(
                (item, index) =>
                  index !== 1 &&
                  index < 3 && <HeaderItem key={index} name={""} icon={item.icon} />
              )}
              <button className="flex" onClick={handleSearchClick}>
                {menu.map(
                  (item, index) =>
                    index === 1 && <HeaderItem key={index} name={""} icon={item.icon} />
                )}
              </button>
              {isMenuVisibleM && (
                <div className="search-dropdown absolute w-[260px] top-[-10px] left-0 right-0 z-50">
                  <SearchBar />
                </div>
              )}
            </div>
          </div>
          <div className="md:hidden z-30 relative" onClick={handleToggleClick}>
            <HeaderItem name={""} icon={<HiDotsVertical />} />
            {toggle ? (
              <div className="absolute top-full z-50 -left-1/1 right-0 mt-4 bg-[#121212] border-[1px] p-3">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem key={index} name={item.name} icon={item.icon} />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
        {/* <img src={user} className="w-[40px] rounded-full" /> */}
        <UserNav className="w-[40px] rounded-full absolute" />
      </div>
    );
  }

export default Header;
