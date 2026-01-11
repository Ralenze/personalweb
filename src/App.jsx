import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import PageButton from './components/pagebutton.jsx'
import ProfileIcon from './components/profileicon.jsx'
import meimage from './assets/me.png'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <div className="bg-black h-screen w-screen flex flex-col place-items-center" >
        <div className="h-1/2 w-full relative  justify-items-center">
        <ProfileIcon img={meimage}/>
        </div>
        <p className='text-white text-xl font-mono'>

          Vibhinn Gautam
        </p>
        <p className='text-white text-md font-mono'>
          Computer Science @ UWaterloo
        </p>
        <hr className="bg-white h-1 w-4/5 my-2 rounded-full" />
        <PageButton>
        More
      </PageButton>
              <PageButton>
        More
      </PageButton>
              <PageButton>
        More
      </PageButton>
      </div>
      
      </div>
    </>
  )
}

export default App
