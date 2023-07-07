import { orders } from "../Data/Data"
import Layout from "../components/Layout"
import Order from '../components/Order'

const Orders = () => {
  return (
    <Layout>
      <div className="flex justify-between items-center my-4">
      <h1 className="text-2xl">ORDERS</h1>
      <button className="bg-[#40128B] px-4 py-2 text-white hover:opacity-70">Add new</button>
    </div>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "/>
                        <label for="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </th>
                 <th scope="col" className="px-6 py-3">
                     ORDER ID
               </th>
               <th scope="col" className="px-6 py-3">
                     PRODUCT NAME
                 </th>
                 <th scope="col" className="px-6 py-3">
                     IMAGE
                 </th>
                 <th scope="col" className="px-6 py-3">
                                      PRICE
              </th>
                <th scope="col" className="px-6 py-3">
                    CUSTOMER NAME
                 </th>
                 <th scope="col" className="px-6 py-3">
                     PHONE NUMBER
                 </th>
                 <th scope="col" className="px-6 py-3">
                     ADDRESS
                 </th>
                 <th scope="col" className="px-6 py-3">
                     Action
                </th>
            </tr>
        </thead>
        <tbody>
        
     {orders.map((o)=>(
    <Order key={o.id} o={o}/>
))}
            
        </tbody>
    </table>
</div>


    </Layout>
  )
}

export default Orders






    