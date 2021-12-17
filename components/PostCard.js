import React from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

function PostCard({ post }) {
  console.log("post", post);
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6 h-[100px] cursor-pointer">
        <Link href={`/post/${post.slug}`}>
          <a>
            <Image
              src={post.featured_image.url}
              layout="fill"
              objectFit="cover"
              alt={post.title}
              className="rounded-lg"
            />
          </a>
        </Link>
      </div>

      <h1 className="transition duration-500 text-center mb-8 cursor-pointer hover:text-pink-600 text-2xl w-5/6 mx-auto font-semibold">
        <Link href={`/post${post.slug}`}>
          <a>{post.title}</a>
        </Link>
      </h1>
      <div className="block lg:flex text-center items-center mb-8 w-full justify-center">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <Image
            src={post.author.photo.url}
            width={40}
            height={40}
            alt={post.author.name}
            className="align-middle rounded-full"
          />
          <p className="inline align-middle text-gray-700 ml-2 text-lg">
            {post.author.name}
          </p>
        </div>
        <div className="text-gray-700 font-medium flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="ml-2">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
      </div>
      <div>
        <p className="text-center text-md text-gray-700 px-10">
          {post.excerpt}
        </p>
        <div className="text-center mt-4">
          <Link href={`/post/${post.slug}`}>
            <span className="transition duration-500 text-white transform hover:-translate-y-1 inline-block bg-pink-600 rounded-full font-semibold text-sm px-5 py-2 cursor-pointer">
              Continue Reading
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
