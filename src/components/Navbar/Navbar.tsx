"use client";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { NavUtil } from "./NavUtils";
import Link from "next/link";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <button
        onClick={toggleSidebar}
        aria-controls="logo-sidebar"
        type="button"
        className="z-50 inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-hero dark:bg-black-1">
          <div className="flex justify-between items-center">
            <div>
              <a href="/" className="flex items-center ps-2.5 mb-5">
                <img
                  src="https://img.icons8.com/?size=100&id=baTWeZAqG8lF&format=png&color=122F9D"
                  className="h-6 text-8 me-3 sm:h-7"
                  alt="UNIX Logo"
                />
                <div>
                  <p className="self-center text-xl font-semibold whitespace-nowrap text-white dark:text-white">
                    UNIX
                  </p>
                  <p className="text-white-1 text-[12px]">MUITICHAIN MANAGER</p>
                </div>
              </a>
            </div>
            <button
              className="cursor-pointer p-3 lg:hidden"
              onClick={toggleSidebar}
            >
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>
          </div>

          <ul className="space-y-2 font-medium">
            {NavUtil.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.url}
                  className="flex items-center p-2 text-white rounded-lg dark:text-black hover:bg-white-1 dark:hover:bg-black-2 hover:text-black-1 group"
                >
                  {item.icon}
                  <span className="ms-3">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
