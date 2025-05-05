import React, { useState } from 'react';

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
      <a href="/" className="flex items-center gap-4 text-2xl font-bold">
        <img
          src="/logo.jpeg"
          alt="life Logo"
          className="w-20 h-20 rounded-4xl"
        />
        <span>Life in Pages</span>
      </a>
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
          <a href="#" onClick={() => setOpen(false)}>
            Home
          </a>
          <a href="#" onClick={CloseBurger}>
            Trending
          </a>
          <a href="#" onClick={CloseBurger}>
            Most Popular
          </a>
          <a href="#" onClick={CloseBurger}>
            About
          </a>
          <a href="#" onClick={CloseBurger}>
            <button className="btn btn-soft btn-info">Login 👋</button>
          </a>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="#">Home</a>
        <a href="#">Trending</a>
        <a href="#">Most Popular</a>
        <a href="#">Posts</a>
        <a href="#">About</a>
        <a href="#" className="btn btn-soft btn-info">
          Login 👋
        </a>
      </div>
    </div>
  );
}
