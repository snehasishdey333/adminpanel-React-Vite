import Navbar from './Navbar'
import Sidebar from '../components/Sidebar'


const Layout = ({children}) => {
  return (
    <div>
      <Navbar/>
      <div className='min-h-screen flex flex-row w-full'>
        <Sidebar/>
         <div className='w-full md:w-[85%] p-8'>
         {children}
         </div>
         
      </div>
    </div>
  )
}

export default Layout
