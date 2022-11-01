import React, { useState } from "react";
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

  return (
    <div className="absolute z-10 w-full py-12">
      <header className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <div className="w-28">
              <Logo className="logo-style" />
            </div>
          </div>
          <div className="w-auto">
            <ul className="flex items-center">
              {Links.map((data, index) => (
                <li className="" key={index.toString()}>
                  <Link href={data.link}>
                    <a className="px-9 text-gray-800">{data.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
