import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="border py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Products</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 ">
                  ABC
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 ">
                  DEF
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 ">
                  GHI
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 ">
                  JKL
                </a>
              </li>
            </ul>
          </div>
          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">rstuvwxyz</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 ">
                  jklmnopq
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 ">
                  abcdefghi
                </a>
              </li>
            </ul>
          </div>

          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Companion</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 ">
                  rfvbgtyhnmj
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 ">
                  qazxswedcv
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 ">
                  mlpoknjiuhb
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 ">
                  Hero
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 ">
                  zxcvbnm
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 ">
                  asdfghjkl
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 ">
                  qwertyuiop
                </a>
              </li>
            </ul>
          </div>
          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 ">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 ">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 ">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 ">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-500 ">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className=" container mx-auto  flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-semibold hidden md:flex">
          Raw<span className="text-blue-500 font-bold">Blogs</span>
        </div>
        <div className="text-gray-400 text-sm hidden md:flex">
          <p>&copy; 2025 Devansh Singh All rights reserved</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href="#">
            <FaGithub className="h-6" />
          </a>
          <a href="#">
            <BsYoutube className="h-6" />
          </a>

          <a href="#">
            <FaLinkedin className="h-6" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
