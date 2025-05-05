import React from 'react';
import { Link } from 'react-router';

export default function MainCategories() {
  return (
    <div className="hidden md:flex items-center justify-around flex-wrap text-my-black bg-my-active rounded-4xl xl:rounded-full p-2 shadow-xl ">
      {/* Categories */}
      {/* <div className="flex-1 items-center justify-between flex-wrap"> */}
      <Link to="/posts" className="bg-my-hover rounded-3xl p-2">
        All Posts
      </Link>
      <Link
        to="/posts?cat=web-design"
        className="hover:bg-my-hover rounded-3xl p-2 ml-1"
      >
        Web Design
      </Link>
      <Link
        to="/posts?cat=web-design"
        className="hover:bg-my-hover rounded-3xl p-2 ml-1"
      >
        Development
      </Link>
      <Link
        to="/posts?cat=web-design"
        className="hover:bg-my-hover rounded-3xl p-2 ml-1"
      >
        DB
      </Link>
      <Link
        to="/posts?cat=web-design"
        className="hover:bg-my-hover rounded-3xl p-2 ml-1"
      >
        SEO
      </Link>
      {/* </div> */}
    </div>
  );
}
