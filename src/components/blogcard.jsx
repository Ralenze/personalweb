import '../index.css';

function BlogCard({ post }) {
  console.log(post);
  return (
    <a
      href={`/blog/${post.slug}`}
      className="block rounded-xl border border-zinc-800 p-5
                 hover:border-zinc-600 transition"
    >
      <div className="flex items-center justify-between text-xs text-zinc-500">
        <span>{new Date(post.date).toLocaleDateString()}</span>
        <span>{post.readingTime}</span>
      </div>

      <h3 className="mt-2 text-lg font-semibold text-white">
        {post.title}
      </h3>

      <p className="mt-2 text-sm text-zinc-400 line-clamp-3">
        {post.excerpt}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {post.tags.map(tag => (
          <span
            key={tag}
            className="text-xs rounded-full bg-zinc-800 px-2 py-1 text-zinc-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  )
}
export default BlogCard;