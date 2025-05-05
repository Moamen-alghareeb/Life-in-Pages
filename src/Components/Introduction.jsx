import React from 'react';
import AddPostButton from './AddPostButton';

export default function Introduction() {
  return (
    <div className="flex items-center justify-between">
      {/* title */}
      <div className="flex flex-col ">
        <h1 className="text-my-sky-blue text-2xl md:text-6xl font-bold w-2/3">
          Thoughts. Stories. Life. Unfiltered
        </h1>
        <p className="mt-1 ps-6 hidden  md:w-5/6 lg:block">
          Life is a story—every moment a sentence, every experience a chapter.
          Here, we celebrate the beauty in the ordinary, the lessons in the
          everyday, and the magic of simply being human. Pull up a chair, and
          let’s turn the pages together.
        </p>
      </div>
      <AddPostButton />
      {/* add post button */}
    </div>
  );
}
