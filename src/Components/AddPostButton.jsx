import React from 'react';
import { Link } from 'react-router';

export default function AddPostButton() {
  return (
    <Link to="/addpost" className="relative">
      {' '}
      <svg
        viewBox="0 0 200 200"
        width="200"
        height="200"
        // className="text-lg tracking-widest animate-spin animatedButton"
        className="text-lg text-my-sky-blue  tracking-widest md:animate-spin animated-btn"
      >
        <path
          id="circlePath"
          fill="none"
          d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
        />
        <text fill="currentColor">
          <textPath href="#circlePath" startOffset="0%">
            Write your story •
          </textPath>
          <textPath href="#circlePath" startOffset="50%">
            Share your idea •
          </textPath>
        </text>
      </svg>
      <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-my-red rounded-full flex items-center justify-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="50"
          height="50"
          fill="none"
          stroke="white"
          strokeWidth="2"
        >
          <line x1="6" y1="18" x2="18" y2="6" />
          <polyline points="9 6 18 6 18 15" />
        </svg>
      </button>
    </Link>

    // <svg
    //   viewBox="0 0 200 200"
    //   width="200"
    //   height="200"
    //   className="text-lg tracking-widest"
    // >
    //   <path
    //     id="circlePath"
    //     d="M 100, 100 m -75, 0 a 75, 75 0 1, 1 150 , 0 a 75, 75 0 1, 1 -150 ,0"
    //     fill="none"
    //   />
    //   <text>
    //     <textPath href="#circlePath" startOffset="0%">
    //       Write Your story
    //     </textPath>
    //     <textPath href="#circlePath" startOffset="50%">
    //       Share you idea
    //     </textPath>
    //   </text>
    //   <button className="bg-my-hover-l rounded-full flex items-center justify-center">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 24 24"
    //       fill="currentColor"
    //       className="size-6"
    //     >
    //       <path
    //         fillRule="evenodd"
    //         d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   </button>
    // </svg>
  );
}
