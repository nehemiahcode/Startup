import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  const [visible, setVisible] = useState(false);
  const [Menuicon, setMenuIcon] = useState(false);
  const navbarRef = useRef(null);
  const menuIconRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const scrollThreshold = 200;
    setVisible(scrollTop >= scrollThreshold);
  };

  const handleOutsideClick = (event) => {
    if (
      !navbarRef.current.contains(event.target) &&
      !menuIconRef.current.contains(event.target)
    ) {
      setMenuIcon(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const Menu = [
    { id: 0, text: "Home", url: "/" },
    { id: 1, text: "About", url: "/about" },
    { id: 2, text: "Pricing", url: "/pricing" },
    { id: 3, text: "Blog", url: "/blog" },
    { id: 4, text: "Contact", url: "/contact" },
  ];

  const handleMenuClick = () => {
    setMenuIcon(!Menuicon);
  };

  return (
    <>
      {/* header */}
      <header
        className={` ${
          visible
            ? "sticky duration-300 border-b-2 bg-slate-800  "
            : "relative duration-300 border-b-[1px] "
        } flex justify-between items-center px-2 z-50  sm:px-12 md:p-0  h-[80px] w-full left-0 right-0 top-0 bg-indigo-950`}
      >
        <div className=" flex justify-center items-center gap-3 ml-4">
          <div className="text-5xl text-sky-600">
            <ion-icon name="logo-bitbucket"></ion-icon>
          </div>
          <div>
            <h1 className=" text-white font-bold text-4xl">Startup</h1>
          </div>
        </div>

        {/* The blury effect when navbar is open */}
        {Menuicon && (
          <div className="fixed overflow-hidden z-40 top-[80px] md:bg-opacity-100 md:backdrop-blur-0 inset-0 bg-opacity-30 backdrop-filter backdrop-blur-sm flex justify-center items-center"></div>
        )}

        {/* navbar */}

        <ul
          ref={navbarRef}
          className={` absolute ${
            Menuicon
              ? "left-4 duration-200 block sm:left-[18%] "
              : "  left-[-1000%]  hidden md:flex duration-200"
          } md:relative md:mr-15 opacity-100 bg-slate-800 w-[93%] md:w-auto md:pt-0 pt-10 rounded-lg
          left-[5%]   z-50   top-[80px] md:left-0 md:top-0 md:flex-row sm:w-[70%]  md:h-0 h-[400px] gap-3
           ring-1 ring-inset  flex-col md:gap-4  flex md:justify-between items-center`}
        >
          {Menu.map((menu, index) => (
            <li key={index}>
              <NavLink
                onClick={handleMenuClick}
                to={menu.url}
                className=" text-white text-xl hover:text-sky-500 duration-200 focus:text-sky-600 font-medium"
              >
                {menu.text}
              </NavLink>
            </li>
          ))}
          {/* buttons in the navbar */}
          <div className=" flex justify-between items-center gap-5 md:hidden mt-4 px-3">
            <button
              className=" bg-gray-100 text-lg focus:bg-gray-200  focus:ring-2 ring-inset
             ring-sky-500 py-2 px-9   rounded-md text-center text-black font-medium"
            >
                   <Link to={"/signin"}> Sign In</Link>
            </button>
            <button
              className=" bg-sky-700 py-2 focus:bg-sky-800 focus:ring-2
             ring-inset ring-white px-9 rounded-md  text-center text-white text-lg font-medium"
            >
            <Link to={"/signup"}> Sign Up</Link>
            </button>
          </div>
        </ul>
        {/* button in the navbar on bigger screen  */}
        <div className=" flex justify-between items-center gap-5 mr-4">
          <button
            className=" bg-gray-100 text-lg  py-2 px-9 hidden md:block
           rounded-md text-center focus:ring-2 ring-inset
             ring-sky-500 text-black font-medium"
          >
            <Link to={"/signin"}> Sign In</Link>
          </button>
          <button
            className=" bg-sky-700 py-2 px-9 rounded-md hidden md:block  focus:ring-2
             ring-inset ring-white text-center text-white text-lg font-medium"
          >
            <Link to={"/signup"}> Sign Up</Link>
          </button>
          <div
            ref={menuIconRef}
            onClick={handleMenuClick}
            className=" text-white text-4xl md:hidden border-[2px] p-1 flex justify-center items-center border-sky-700 rounded-xl"
          >
            <ion-icon
              name={`${Menuicon ? "close-outline" : "menu-outline"}`}
            ></ion-icon>
          </div>
        </div>
      </header>
      {/* End of the header and navbar codes */}
    </>
  );
}

export default App;
