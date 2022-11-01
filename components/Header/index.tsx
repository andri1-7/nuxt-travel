import React, { useState, useCallback } from "react";
import Link from "next/link";
import Logo from "images/logo.svg";

export default function header() {
  const Links = [
    { name: "Home", link: "/Home" },
    { name: "Service", link: "/" },
    { name: "About", link: "/" },
    { name: "Contact", link: "/" },
  ];

  let [navbar, setNavbar] = useState(false);

  const toggleMenu = useCallback(() => {
    setNavbar((prev) => !prev);
  }, [setNavbar]);

  return (
    <div className="absolute z-20 lg:z-10 w-full py-6 lg:py-12">
      <header className="max-w-full lg:max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="w-28">
            <Logo className="logo-style" />
          </div>
          <button
            className={
              "w-auto flex items-center justify-center lg:hidden p-2 appearance-none z-50 text-white fixed right-4" +
              " " +
              (navbar
                ? "text-white fixed right-4"
                : " text-inherit text-white fixed right-4")
            }
            onClick={toggleMenu}
          >
            <span className="material-icons">{navbar ? "close" : "menu"}</span>
          </button>
          <div
            className={
              "lg:flex w-auto lg:opacity-100 lg:visited lg:h-auto z-20" +
              " " +
              (navbar
                ? "flex items-center justify-center h-screen w-full inset-0 opacity-100 visible fixed bg-black"
                : "hidden opacity-0 h-0 invisible ")
            }
          >
            <ul className="flex items-center flex-col lg:flex-row gap-y-6 lg:gap-y-0">
              {Links.map((data, index) => (
                <li className="" key={index.toString()}>
                  <button onClick={toggleMenu}>
                    <Link href={data.link}>
                      <a
                        className={
                          "px-9" +
                          " " +
                          (navbar ? "text-white" : "text-gray-800")
                        }
                      >
                        {data.name}
                      </a>
                    </Link>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
