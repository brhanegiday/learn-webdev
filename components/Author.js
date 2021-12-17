import React from "react";
import Image from "next/image";

function Author({ author }) {
  return (
    <>
      <div className="flex items-center justify-center p-12 mt-20 gap-8 bg-black bg-opacity-20 mb-4 lg:mb-0 w-full lg:w-auto mr-8">
        <div>
          <Image
            src={author.photo.url}
            width={100}
            height={100}
            alt={author.name}
            className="align-middle rounded-full"
          />
        </div>
        <div>
          <h3 className="text-white text-xl my-4 font-bold align-middle">
            {author.name}
          </h3>
          <p className="text-white text-sm">{author.bio}</p>
        </div>
      </div>
    </>
  );
}

export default Author;
