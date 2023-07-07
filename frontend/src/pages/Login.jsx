


import { Link } from "react-router-dom"
import {useState} from 'react'



const Login = () => {
// console.log(URL)
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(false)

  // const navigate=useNavigate()
   
// const handleLogin=async (e)=>{
//    e.preventDefault()
//    dispatch(loginStart())
//    setError(false)
//    try{
//     const res=await axios.post(URL+"/api/auth/login",{email,password})
//     dispatch(loginSuccess(res.data))
//   //  console.log(res.data)
//     navigate('/')
    
//    }
//    catch(err){
//     setError(true)
//     dispatch(loginFailure())
//     console.log(err)
    
//    }

// }



  return (
    <>
  



    <div className='w-full mx-auto flex flex-col justify-center items-center h-[100vh] space-y-6'>
        <div className='w-[80%] md:w-[25%] flex flex-col justify-center items-center space-y-4 mx-auto'>
        <h1 className='text-xl font-bold text-left text-[#40128B]'>Log In with your account</h1>
          <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter your email' className='w-full px-4 py-2 border-2 border-black outline-0'/>
          <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter your password' className='w-full px-4 py-2 border-2 border-black outline-0'/>
         
          <button  className='cursor-not-allowed border-2 text-white border-[#40128B]  w-full px-4 py-4 text-lg font-bold bg-[#40128B] rounded-lg ' >Log In</button>
          <div className='flex items-center justify-center space-x-2'>
           <p className='text-sm text-black'>New here?</p>
           <p className="font-semibold text-[#40128B] text-sm "><Link to="/register" >Register</Link></p>
          </div>
          
        </div>
        <div>{error?<p className='mt-4 text-lg font-bold text-center text-red-600'>something went wrong!</p>:""}</div>
        <div><p className="px-8 pt-8 text-sm text-center text-black md:px-0">By signing in or creating an account, you agree with our <span className='text-[#40128B] sm text-'>Terms & Conditions</span> and <span className='text-[#40128B] sm text-'>Privacy Statement</span></p>
          <p className="px-8 text-sm text-center text-black md:px-0">All rights reserved.
Copyright (2006-2023) – adminpanel.com™</p></div>
    </div>
    

    </>
   
  )
}

export default Login


