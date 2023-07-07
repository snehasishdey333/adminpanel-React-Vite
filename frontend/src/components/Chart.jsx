
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { userData } from '../data/Data';

const Chart = () => {
  return (
    <div className='block w-full md:w-[70%] mt-8 shadow-lg shadow-gray-300'>
     <ResponsiveContainer width="100%" height="100%">
        <AreaChart className='w-full h-full block'
          width={900}
          height={500}
          data={userData}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis/>
          <Tooltip />
          <Area type="monotone" dataKey="Active User" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart
