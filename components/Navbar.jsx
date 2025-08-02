import lottie from "lottie-web";
import { defineElement } from "@lordicon/element"; 
import Button4 from '../Buttons/button4'
import Button5 from '../Buttons/Button5'
import { useNavigate } from "react-router-dom";
 

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);
 
  
const Navbar = () => { 

  const navigate = useNavigate();
  
  return (
    <div className='bg-zinc-900/50 w-full lg:h-[70px] md:h-[60px]  sm:h-[50px] h-[40px] items-center justify-between flex    backdrop-blur-2xl opacity-80'>

{/* profile     */}
<div className="logo lg:w-[40px] lg:h-[40px] md:w-[40px] md:h-[40px] sm:w-[30px] sm:h-[30px]  w-[20px]  h-[20px] bg-zinc-700 m-3 rounded-full flex items-center justify-center text-white lg:text-sm md:text-sm sm:text-sm text-[10px] "> P
    </div>

{/* searchbar  */}
    <div className="searchbar w-1/2 h-14 -translate-x-[50%] sm:flex md:flex lg:flex hidden items-center justify-center ">
    {/* Search Container */}
    <div className="sm:flex md:flex lg:flex items-center border-none rounded-lg  overflow-hidden  w-2/3 bg-zinc-700/50 backdrop-blur-2xl opacity-80 cursor-pointer transition-all duration-200 ease-out group hover:scale-105 hidden sm:h-8  md:h-10 lg:h-10">
        {/* Search Icon */}
        <div className="px-3 py-2 flex items-center text-gray-500 sm:w-10 md:w-12 lg:w-12">
        <lord-icon
    src="https://cdn.lordicon.com/wjyqkiew.json"
    trigger="hover"
    colors="primary:#e4e4e4,secondary:#ffffff"
    style={{ width: "25px", height: "25px", cursor: "pointer" }}>
       </lord-icon>
        </div>

        {/* Partition Line */}
        <div className="w-[1px] sm:h-[20px] md:h-[30px]    lg:h-[35px]  bg-gray-700"></div>

        {/* Input Field */}
        <input
            type="text"
            placeholder="Search"
            className="flex-1 lg:px-5 md:px-2 sm:px-1 outline-none text-white   transition-all duration-300 ease-out sm:text-sm md:text-base lg:text-base"/>
        {/* Search Button (Now Animates with Input) */}
        <button className="lg:px-5 md:px-1 -ml-20 sm:px-1 py-2 bg-zinc-600 text-white cursor-pointer transition-all duration-300 ease-out hover:bg-zinc-900 group-hover:scale-105 sm:text-[11px] md:text-base lg:text-base">
            Search
        </button>

    </div>
</div>

<div className="right    p-5 absolute right-0 lg:flex md:flex sm:flex hidden items-center justify-center  gap-5">
         
        <button onClick={() => navigate("/Btnparent")}>
                <Button4/>
          </button>   
  

        <button onClick={() => navigate("/Gifparent")}>
                <Button5/>
          </button>       
  
          
           
    </div>

{/* searchbar icon for mobile */}
<div className='p-3 flex sm:hidden md:hidden lg:hidden gap-5 items-center'> 
       <lord-icon
    src="https://cdn.lordicon.com/wjyqkiew.json"
    trigger="hover"
    colors="primary:#e4e4e4,secondary:#ffffff"
    style={{ width: "20px", height: "20px", cursor: "pointer" }}
    
    >
</lord-icon>

{/* Menu for mobile */}
<div 
className='w-5 h-[14px]   flex flex-col  justify-between cursor-pointer '>
    <div className='w-full h-[1.7px] bg-zinc-500 '></div>
    <div className='w-full h-[1.7px] bg-zinc-500 '></div>
    <div className='w-full h-[1.7px] bg-zinc-500 '></div>
</div>
 
  
 
</div>



    

    </div>
  )
}

export default Navbar
//flex items-center justify-center 