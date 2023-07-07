import {MdDashboard,MdLocalShipping} from 'react-icons/md'
import {BsFillBox2Fill,BsGraphUp} from 'react-icons/bs'
import {BiSolidUserCircle,BiLogOut} from 'react-icons/bi'
import '../scss/SliderItem.scss'
// import {IoStatsChartSharp} from 'react-icons/io'
import {FaUsers,FaBox} from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'


const Sidebar = () => {
   const path=useLocation().pathname
   
  return (
    <div className="hidden md:flex w-[15%]  flex-col bg-[#40128B] space-y-4 pt-4 min-h-screen ">
    {/* item 1 */}
   
    <div className={path==="/"?"activeLinks":"inactiveLinks"}>
       <h3 className='text-lg cursor-pointer'><MdDashboard/></h3>
       <h3 className='text-lg cursor-pointer font-bold'><Link to="/">Dashboard</Link></h3>
    </div> 
   
     

   
    <div className={path==="/users"?"activeLinks":"inactiveLinks"}>
       <h3 className='text-lg cursor-pointer'><FaUsers/></h3>
       <h3 className='text-lg cursor-pointer font-bold'><Link to="/users">Users</Link></h3>
    </div> 
     
   
    <div className={path==="/products"?"activeLinks":"inactiveLinks"}>
       <h3 className='text-lg cursor-pointer'><FaBox/></h3>
       <h3 className='text-lg cursor-pointer font-bold'><Link to="/products">Products</Link></h3>
    </div> 

   
    <div className={path==="/orders"?"activeLinks":"inactiveLinks"}>
       <h3 className='text-lg cursor-pointer'><MdLocalShipping/></h3>
       <h3 className='text-lg cursor-pointer font-bold'><Link to="/orders">Orders</Link></h3>
    </div> 

  
    <div className={path==="/stats"?"activeLinks":"inactiveLinks"}>
       <h3 className='text-lg cursor-pointer'><BsGraphUp/></h3>
       <h3 className='text-lg cursor-pointer font-bold'><Link to="/stats">Stats</Link></h3>
    </div> 

   
    <div className={path==="/profile"?"activeLinks":"inactiveLinks"}>
       <h3 className='text-lg cursor-pointer'><BiSolidUserCircle/></h3>
       <h3 className='text-lg cursor-pointer font-bold'><Link to="/profile">Profile</Link></h3>
    </div> 

   
    <div className={path==="/logout"?"activeLinks":"inactiveLinks"}>
       <h3 className='text-lg cursor-pointer'><BiLogOut/></h3>
       <h3 className='text-lg cursor-pointer font-bold'><Link to="/logout">Logout</Link></h3>
    </div> 

    
    </div>
  )
}

export default Sidebar
