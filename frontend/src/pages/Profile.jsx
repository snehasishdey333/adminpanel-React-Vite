import Layout from "../components/Layout"


const Profile = () => {
  return (
    <Layout>
        <div className="h-full w-full flex justify-center items-center">
        <div className="flex items-center h-screen w-full justify-center">


    <div className="bg-white shadow-xl rounded-lg py-8 px-16">
        <div className="photo-wrapper p-2">
            <img className="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe"/>
        </div>
        <div className="p-2">
            <h3 className="text-center text-3xl text-gray-900 font-medium leading-8">John Doe</h3>
            <div className="text-center text-gray-400 text-xl font-semibold">
                <p>Seller</p>
            </div>
            <table className="text-xs my-3">
                <tbody><tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                    <td className="px-2 py-2 text-lg">Chatakpur-3, Dhangadhi Kailali</td>
                </tr>
                <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                    <td className="px-2 py-2 text-lg">+977 9955221114</td>
                </tr>
                <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td className="px-2 py-2 text-lg">john@exmaple.com</td>
                </tr>
            </tbody></table>

            <div className="text-center my-3 flex flex-row justify-center items-center space-x-4">
            <button className="bg-[#40128B] px-4 py-2 text-white hover:opacity-70">UPDATE</button>
            <button className="bg-[#40128B] px-4 py-2 text-white hover:opacity-70">DELETE</button>
            </div>

        </div>
    </div>
</div>

</div>
       
    </Layout>
  )
}

export default Profile
