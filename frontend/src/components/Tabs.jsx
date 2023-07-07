import { Link } from "react-router-dom"


const Tabs = () => {
  return (
    <div>
    <div className='absolute top-8 z-10 flex flex-col bg-[#40128B] px-4 pr-12 py-4 space-y-2 text-lg'>
             <p className="cursor-pointer text-white hover:text-gray-200"><Link to="/">Dashboard</Link></p>
             <p className="cursor-pointer text-white hover:text-gray-200"><Link to="/users">Users</Link></p>
             <p className="cursor-pointer text-white hover:text-gray-200"><Link to="/products">Products</Link></p>
             <p className="cursor-pointer text-white hover:text-gray-200"><Link to="/orders">Orders</Link></p>
             <p className="cursor-pointer text-white hover:text-gray-200"><Link to="/stats">Stats</Link></p>
             <p className="cursor-pointer text-white hover:text-gray-200"><Link to="/profile">Profile</Link></p>
             <p className="cursor-pointer text-white hover:text-gray-200"><Link to="/logout">Logout</Link></p>
           </div>
   </div>
  )
}

export default Tabs
