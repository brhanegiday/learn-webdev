import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";

import { getPosts } from "../services";
export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Learn Webdev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts
            .sort((a, b) => {
              return (
                new Date(b.node.createdAt.substr(0, 10)) -
                new Date(a.node.createdAt.substr(0, 10))
              );
            })
            .map((post) => (
              <PostCard key={`postcard-${post.node.slug}`} post={post.node} />
            ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: {
      posts,
    },
  };
}
