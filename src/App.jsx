import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import PageButton from './components/pagebutton.jsx'
import ProfileIcon from './components/profileicon.jsx'
import { useNavigate } from "react-router-dom";

import meimage from './assets/me.png'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-black h-screen w-screen flex flex-col lg:flex-row place-items-center" >
        <div className="h-1/2 w-full lg:w-1/2 lg:flex relative lg:flex-col flex flex-col justify-end place-items-center ">

        <ProfileIcon img={meimage}/>

        <p className='text-white text-xl font-mono lg:my-4'>

          Vibhinn Gautam
        </p>
        <p className='text-white text-md font-mono lg:my-4'>
          Computer Science @ UWaterloo
        </p>
        </div>
        <hr className="bg-white md:hidden h-1 w-4/5 my-2 rounded-full" />
        <div className="h-1/2 w-full lg:w-1/2 lg:flex lg:flex-col place-items-center justify-center lg:align-middle">
        <PageButton route="/about">
        about
      </PageButton>
              <PageButton>
        experience
      </PageButton>
              <PageButton>
        blog
      </PageButton>
      <PageButton>
        contact
      </PageButton>
      </div>
      </div>
      
    </>
  )
}

export default App
