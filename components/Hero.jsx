import React from 'react' 
import Navbar from '../components/navbar' 

const Hero = () => {
  return (
    <div className='  bg-zinc-800  '>
      <div className="w-full h-screen">
         <Navbar/>
         <div className="bg-zinc-900 w-[30vw] h-[20vw] m-5">          
         <video src="Church.mp4" controls className=' w-full  h-full' ></video> 
         </div>
         
      </div>
        
 
    </div>
  )
}

export default Hero













