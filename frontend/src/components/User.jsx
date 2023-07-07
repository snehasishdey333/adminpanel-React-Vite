


const User = ({user}) => {
  return (
    <tr className="bg-white border-b  hover:bg-gray-50">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {user.id}
                </th>
                <td className="px-6 py-4">
                    {user.first_name+" "+user.last_name}
                </td>
                <td className="px-6 py-4">
                    {user.email}
                </td>
                <td className="px-6 py-4">
                    {user.date_of_birth}
                </td>
                <td className="px-6 py-4">
                    {user.phone_number}
                </td>
                <td className="px-6 py-4">
                    {user.address.city}
                </td>
                <td className="px-6 py-4">
                    {user.address.country}
                </td>
                
                <td className="flex items-center px-6 py-4 space-x-3">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
            </tr>
  )
}

export default User
