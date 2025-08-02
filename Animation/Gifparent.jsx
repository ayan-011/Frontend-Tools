import React from 'react'
import Toxic from '/Animation/toxic'
import Monkey1 from '/Animation/monkey1'
import Monkey2 from '/Animation/monkey2'
import Giphy from '/Animation/Giphy'

const Gifparent = () => {
  return (
    <div className='bg-zinc-800 w-full h-screen '>
    <div className="w-full h-screen flex p-5 gap-5">
      <div className='w-fit     flex items-center justify-center'><Toxic/></div>
      <div className='w-fit     flex items-center justify-center'><Monkey1/></div>
      <div className='w-fit     flex items-center justify-center'><Monkey2/></div>
      <div className='w-fit     flex items-center justify-center'><Giphy/></div>
      
     
       
    </div>
  </div>
  )
}

export default Gifparent