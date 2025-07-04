"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  // const [isdark, setIsdark] = useState(
  //   JSON.parse(localStorage.getItem("isdark") || "{}")
  // );
  // useEffect(() => {
  //   localStorage.setItem("isdark", JSON.stringify(isdark));
  // }, [isdark]);

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm pt-5">
        {/* logo flex 1 */}
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl" href="/">
            <img
              src="https://static.wixstatic.com/media/ee7859_c05d5de85bb04ff1bf63a598e9fcdbb8~mv2.png/v1/fill/w_120,h_28,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/KimboticLogo.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle pr-10 pt-2"
            >
              <div className="indicator" style={{ minWidth: "30px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-15 w-15"
                  fill="none"
                  viewBox="0 0 28 28"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span
                  className="badge badge-sm indicator-item"
                  style={{ top: "20px", backgroundColor: "#0000003d" }}
                >
                  8
                </span>
              </div>
            </div>

            {/* cart dropdown menu */}
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* profile dropdown menu */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* end of profile dropdown */}

      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          {/* mobile dropdown menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="/about">About</a>
              </li>

              <li>
                <a href="/all-products">Products</a>
              </li>
              <li>
                <a href="/all-todos">ToDos</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/login">Log In</a>
              </li>
            </ul>
          </div>
          {/* mobile dropdown menu ends */}

          <Link className="btn btn-ghost font-extrabold" href="/">
            HOME
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="btn btn-ghost " href="/about">
                About
              </Link>
            </li>

            <li>
              <Link className="btn btn-ghost " href="/all-products">
                Products
              </Link>
            </li>
            <li>
              <Link className="btn btn-ghost " href="/all-todos">
                Todos
              </Link>
            </li>
            <li>
              <Link className="btn btn-ghost " href="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="btn btn-ghost " href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="max-w-3xl pr-5">
            {/* search bar here */}
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" required placeholder="Search" />
            </label>
          </div>
          <div className="pt-2">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              {/* <input
                type="checkbox"
                className="theme-controller"
                value="light"
                checked={isdark}
                onChange={() => setIsdark(!isdark)}
              /> */}

              {/* sun icon */}
              <svg
                className="swap-off h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 34 34"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 34 34"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
