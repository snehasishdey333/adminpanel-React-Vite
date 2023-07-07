

const Widget = ({title,num,percentage,desc,icon,color,iconColor,arrow,percentageColor}) => {
  
  return (
    <div className="w-full cursor-pointer flex flex-col space-y-4 shadow-gray-200 px-4 py-4 shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-xl">{title}</h3>
        <div className='flex justify-center items-center space-x-1 text-lg'>
           <p style={{color:percentageColor}}>{arrow}</p>
          <h3 style={{color:percentageColor}}>{percentage}%</h3>
        </div>
      </div>
      <h1 className="text-4xl">{num}</h1>
      <div className="flex justify-between items-center">
         <p className="underline">{desc}</p>
         <div style={{backgroundColor: color,}} className='p-2'>
         <p style={{color:iconColor}}>{icon}</p>
         </div>
         
         
      </div>
    </div>
  )
}

export default Widget
