"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <div>
      <nav class="md:bg-transparent sm:bg-gray-400 border-gray-200 md:dark:bg-transparent sm:dark:bg-gray-400">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              color="white"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100  md:bg-bg-transparent sm:bg-bg-gray-400 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  md:dark:bg-transparent sm:dark:bg-gray-500 md:dark:bg-bg-transparent sm:dark:bg-bg-gray-500 ">
              <li onClick={() => router.push("/")}>
                <a
                  class="block py-2 px-3  text-white rounded hover:text-blue-600 md:bg-transparent sm:bg-gray-400  md:p-0  "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li onClick={() => router.push("/about")}>
                <a class="block py-2 px-3  text-white rounded hover:text-blue-600 md:bg-transparent  md:p-0  ">
                  About
                </a>
              </li>
              <li onClick={() => router.push("/services")}>
                <a class="block py-2 px-3  text-white rounded hover:text-blue-600 md:bg-transparent  md:p-0  ">
                  Services
                </a>
              </li>
              <li onClick={() => router.push("/projects")}>
                <a class="block py-2 px-3  text-white rounded hover:text-blue-600 md:bg-transparent  md:p-0  ">
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3  text-white rounded hover:text-blue-600 md:bg-transparent  md:p-0  "
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
