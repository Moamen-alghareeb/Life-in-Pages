import React, { useState } from 'react';
import Image from '../Components/Image';
import { NavLink } from 'react-router';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const ToggleBurger = () => {
    setOpen((prev) => !prev);
  };
  const CloseBurger = () => {
    setOpen(false);
  };
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between my-2">
      {/* LOGO */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <NavLink to="/">
          <Image
            src="/logo.jpeg"
            alt="life Logo"
            className="w-15 h-15 md:{w-20 h-20} rounded-4xl"
          />
        </NavLink>
        <span className="cursor-default">Life in Pages</span>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* MOBILE BUTTON */}
        <div className="cursor-pointer text-4xl" onClick={ToggleBurger}>
          {/* Change Hamburger Icon */}
          {open ? 'X' : '☰'}
        </div>
        {/* MOBILE a LIST */}
        <div
          className={`w-full h-screen  flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-20 transition-all ease-in-out ${
            open ? 'left-0' : 'left-full'
          }`}
        >
          <NavLink to="#" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/postlist" onClick={CloseBurger}>
            Posts
          </NavLink>
          <NavLink to="#" onClick={CloseBurger}>
            Most Popular
          </NavLink>
          <NavLink to="#" onClick={CloseBurger}>
            About
          </NavLink>
          <NavLink
            to="#"
            className="btn btn-soft btn-info"
            onClick={CloseBurger}
          >
            Login 👋
          </NavLink>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <NavLink to="/">Home</NavLink>
        <NavLink to="postlist">Posts</NavLink>
        <NavLink to="/about">About</NavLink>

        <SignedOut>
          <NavLink to="/login" className="btn btn-soft btn-info">
            Login 👋
          </NavLink>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
