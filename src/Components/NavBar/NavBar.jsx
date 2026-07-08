import React from "react";
import logo from "../../assets/logo.png";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlineMenuOpen } from "react-icons/md";


const NavBar = () => {
  return (
    <div className="bg-white shadow-sm sticky top-0 z-50">
      <div className="navbar container mx-auto px-4">

        {/* Left Side */}
        <div className="navbar-start">

          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <MdOutlineMenuOpen className="h-10 w-10">  </MdOutlineMenuOpen> 
            </div>

            {/* Mobile Navigation */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 z-10"
            >
              <li><a href="#">Products</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="w-40"
          />

        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-medium">
            <li><a href="#">Products</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end gap-2">

          {/* Shopping Cart */}
          <button className="btn btn-ghost btn-circle relative">
            <HiOutlineShoppingCart className="text-3xl" />
            {/* Replace '5' with your dynamic cart count state */}
            <span className="absolute bottom-5 left-5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-white">
                5
            </span>
            </button>

          {/* Login Button */}
          <button className="btn btn-ghost hidden sm:block">
            Login
          </button>

          <button className="btn bg-violet-600 border-transparent hover:border-[#632efd] hover:outline-[#632efd] hover:bg-[#ffffff] hover:text-[#632efd] text-white rounded-full">
            Get Started
          </button>

        </div>

      </div>
    </div>
  );
};

export default NavBar;