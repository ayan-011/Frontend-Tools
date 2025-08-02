import React from 'react'
import Button1 from "/Buttons/button1"
import Button2 from "/Buttons/button2"
import Button3 from "/Buttons/button3"
import Button4 from "/Buttons/button4"
import Button5 from "/Buttons/button5"

const Btnparent = () => {
  return (
    <div className='bg-zinc-800 w-full h-screen '>
      <div className="w-full h-screen flex p-5 gap-5">
        <div className='w-50 h-50 bg-zinc-600 flex items-center justify-center'><Button1/></div>
        <div className='w-50 h-50 bg-zinc-600 flex items-center justify-center'><Button2/></div>
        <div className='w-50 h-50 bg-zinc-600 flex items-center justify-center'><Button3/></div>
        <div className='w-50 h-50 bg-zinc-600 flex items-center justify-center'><Button4/></div>
        <div className='w-50 h-50 bg-zinc-600 flex items-center justify-center'><Button5/></div>
       
         
      </div>
    </div>
  )
}

export default Btnparent