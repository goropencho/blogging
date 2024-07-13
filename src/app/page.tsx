import { Metadata } from "next";

const posts = [
  {
    title: "My First Blog Post",
    summary: "The first blog post I've written on my blogging software!",
    post: "This is my first blog post content...",
  },
  {
    title: "My Second Blog Post",
    summary: "The Second blog post I've written on my blogging software!",
    post: "This is my Second blog post content...",
  },  {
    title: "My Third Blog Post",
    summary: "The Third blog post I've written on my blogging software!",
    post: "This is my Third blog post content...",
  },
];

export const metadata: Metadata = {
  title: posts[0].post,
  description: "Blogging Software Challenge #68",
};
export default function Home() {
  return (
    <main>
      {posts.map((post) => (
        <>
          <h1>{post.title}</h1>
          <p>{post.summary}</p>
        </>
      ))}
    </main>
  );
}
