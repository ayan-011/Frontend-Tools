import { useState } from 'react'
import './App.css' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from '../components/Hero'
import Btnparent from "/Buttons/btnparent"
import Gifparent from "/Animation/gifparent"
import Random from '../components/Random'



function App() {
  const [count, setCount] = useState(0)

  return (
    <> 

<Router>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/btnparent" element={<Btnparent/>} />
            <Route path="/gifparent" element={<Gifparent/>} />
            <Route path="/random" element={<Random/>} />
             
          </Routes>
        </Router>
       
       
    
 
    </>
  )
}

export default App
