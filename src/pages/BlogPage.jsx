import "../index.css"
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { blogPosts } from "../texts/blogPosts";
import ReturnButton from "../components/returnbutton";

function BlogPage() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) return <h1>404</h1>;

  return (
    <div className="min-h-screen w-screen bg-black">
        <ReturnButton/>
    <div className="h-full w-3/5 prose prose-invert mx-auto py-16 lg:py-32 place-items-center font-mono">
      <h1>{post.title}</h1>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {post.content}
      </ReactMarkdown>
    </div>
    </div>
  );
}

export default BlogPage;