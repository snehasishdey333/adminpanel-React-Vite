

const Order = ({o}) => {
  return (
   
    
<tr className="bg-white border-b  hover:bg-gray-50 ">
    <td className="w-4 p-4">
        <div className="flex items-center">
            <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "/>
            <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
        </div>
    </td>
    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
        {o.id}
    </th>
    <td className="px-6 py-4">
        {o.title}
    </td>
    <td className="px-6 py-4">
        <img src={o.images[0]} alt="product_img" className="h-8 w-8"/>
    </td>
    <td className="px-6 py-4">
        {o.price}
    </td>
    <td className="px-6 py-4">
        {o.customer}
    </td>
    <td className="px-6 py-4">
        {o.phone_number}
    </td>
    <td className="px-6 py-4">
        {o.address.city+" "+o.address.street_address+" "+o.address.zipcode}
    </td>
    <td className="flex items-center px-6 py-4 space-x-3">
        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
    </td>
</tr>
    
    
  )
}

export default Order
