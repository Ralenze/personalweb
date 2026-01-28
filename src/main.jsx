import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AboutPage from './pages/About.jsx';
import Experience from './pages/Experience.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import BlogPage from './pages/BlogPage.jsx'
const router = createBrowserRouter([
  {path: '/', element: <App/>},
  {path: '/about', element: <AboutPage/>},
  {path: '/experience', element: <Experience/>},
  {path: '/blog', element: <Blog/>},
  {path: '/contact', element: <Contact/>},
  {path: '/blog/:slug', element: <BlogPage />}

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div
  className="
    min-h-[100dvh]
    w-full
    overflow-x-hidden
    pt-[env(safe-area-inset-top)]
    pb-[env(safe-area-inset-bottom)]
  "
>
    <RouterProvider router={router}/>
    </div>
  </StrictMode>,
)
