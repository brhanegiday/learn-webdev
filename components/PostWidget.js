import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import { getRecentPosts, getSimilarPosts } from "../services";

function PostWidget({ categories, slug }) {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);
  console.log(relatedPosts);
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h2 className="text-xl mb-4 border-b pb-1 font-semibold">
        {slug ? "Related Posts" : "Recent Posts"}
      </h2>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4 gap-3">
          <div className="w-16 flex-none">
            <Image
              src={post.featured_image.url}
              alt={post.title}
              height={60}
              width={60}
              className="align-middle rounded-full"
            />
          </div>
          <div className="flex-grow">
            <p className="text-xs mb-1 text-gray-500 font-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title}>
              <a>
                <h2 className="text-sm"> {post.title}</h2>
              </a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostWidget;
