import '../index.css';
import PageButton from '../components/pagebutton.jsx'
import TextBox from '../components/textbox.jsx'
import ReturnButton from '../components/returnbutton.jsx';
import ReactMarkdown from 'react-markdown';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import BlogCard from '../components/blogcard.jsx'
import {blogPosts} from '../texts/blogPosts'
 function Blog() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )


  return (
    <div className="min-h-screen min-h-[100svh]  w-screen bg-black py-16 px-8">
        <ReturnButton/>
          <h1 className="text-3xl text-center font-mono text-white mb-8">
        Latest
      </h1>
    <div className="grid gap-4 md:grid-cols-2 font-mono">
      {sortedPosts.map(post => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
    </div>
  )
}

export default Blog