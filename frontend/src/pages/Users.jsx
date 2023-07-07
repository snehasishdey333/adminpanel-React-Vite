import Layout from "../components/Layout"
import User from '../components/User'
import {users} from '../data/Data'

const Users = () => {
  return (
    <Layout>
    <>
      <div className="flex justify-between items-center my-4">
      <h1 className="text-2xl">USERS</h1>
      <button className="bg-[#40128B] px-4 py-2 text-white hover:opacity-70">Add new</button>
    </div>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "/>
                        <label for="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3 ">
                    USER ID
                </th>
                <th scope="col" className="px-6 py-3">
                    NAME
                </th>
                <th scope="col" className="px-6 py-3">
                    EMAIL
                </th>
                <th scope="col" className="px-6 py-3">
                    DOB
                </th>
                <th scope="col" className="px-6 py-3">
                    PHONE
                </th>
                <th scope="col" className="px-6 py-3">
                    CITY
                </th>
                <th scope="col" className="px-6 py-3">
                    COUNTRY
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
         
         {users.map((user)=>(
             <User key={user.id} user={user} />
         ))}
            
        </tbody>
    </table>
</div>
</>
    </Layout>
    
  )
}

export default Users
