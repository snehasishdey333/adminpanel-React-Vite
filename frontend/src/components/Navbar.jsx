import {FaList,FaUserCircle} from 'react-icons/fa'
import {BsFillMoonFill,BsSunFill} from 'react-icons/bs'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import Tabs from './Tabs'


const Navbar = () => {
  const [dark,setDark]=useState(false)
  const [toggle,setToggle]=useState(false)
  const user=true
  
 
  const toggleTheme=()=>{
    setDark(!dark)
  }
  const handleTabs=()=>{
      setToggle(!toggle)
  }

  return (
    <div className="flex flex-row justify-between items-center px-3 md:px-8 py-4 bg-[#40128B]">
      <div className="text-xl font-bold text-white flex justify-center items-center cursor-pointer">
        <Link to="/">Admin Panel</Link>
      </div>
      <div className="flex justify-between items-center space-x-4 md:space-x-8">
        {!dark?<h3 className="text-white text-lg cursor-pointer" onClick={toggleTheme}><BsFillMoonFill/></h3>:
        <h3 className="text-white text-lg cursor-pointer " onClick={toggleTheme}><BsSunFill/></h3>}
        {user?<div className="md:hidden text-white] text-lg cursor-pointer text-white relative" onClick={handleTabs}>
        <FaList/>
        {toggle?<Tabs/>:""}
        </div>:""}
        {user?"": <h3 className="text-white text-lg"><Link to="/register">Register</Link></h3>}
        {user?<div className="text-white text-lg flex space-x-1 cursor-pointer md:space-x-3 justify-center items-center">
          <h3><Link to="/profile"><FaUserCircle/></Link></h3>
          <h3><Link to="/profile">Jeet</Link></h3>
        </div>:""}
        {user?"":<h3 className="text-white text-lg"><Link to="/login">Login</Link></h3>}
      </div>
    </div>
  )
}

export default Navbar
