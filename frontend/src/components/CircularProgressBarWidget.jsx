import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';

const CircularProgressBarWidget = () => {
    const percentage = 63;
  return (
    <div className="shadow-gray-200 shadow-xl p-4 flex-col flex items-center  justify-center space-y-4">
    <div className="flex justify-between items-center w-full">
    <h1 className="text-xl">Total Revenue</h1>
    <p className="text-gray-400"><BsThreeDotsVertical/></p>
    </div>
      
       <div style={{ width: 200, height: 200 }} className="mx-12">
       <CircularProgressbar value={percentage} strokeWidth={3} text={`${percentage}%`} />;
       </div>
       <div className="flex flex-col justify-center items-center w-[60%]">
       <p className="text-center text-sm text-gray-400">Total sales made today</p>
       <h3 className="text-center text-3xl font-semibold my-2">₹998</h3>
       <p className="text-center text-sm text-gray-400">Previos transactions are processing. Last payments may not be included</p>
       </div>
       
       <div className="flex flex-row justify-center space-x-8 items-center">

       <div className="homeStats">
           <p className="text-gray-400 text-lg">Today</p>
           <div className="flex justify-center items-center space-x-1">
             <p className="text-green-500 text-sm"><BiUpArrowAlt/></p>
             <p className="text-green-500 text-xl font-semibold">₹998</p>
           </div>
         </div>

         <div className="homeStats">
           <p className="text-gray-400 text-lg">This month</p>
           <div className="flex justify-center items-center space-x-1">
             <p className="text-green-500 text-sm"><BiUpArrowAlt/></p>
             <p className="text-green-500 text-xl font-semibold">₹4500</p>
           </div>
         </div>
         
         <div className="homeStats">
           <p className="text-gray-400 text-lg">Previous month</p>
           <div className="flex justify-center items-center space-x-1">
             <p className="text-red-500 text-sm"><BiDownArrowAlt/></p>
             <p className="text-red-500 text-xl font-semibold">₹5600</p>
           </div>
         </div>
       </div>
       
    </div>
  )
}

export default CircularProgressBarWidget
