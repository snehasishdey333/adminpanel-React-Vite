import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'
import Products from './pages/Products'
import Orders from './pages/Orders'
import Stats from './pages/Stats'
import Profile from './pages/Profile'
import Logout from './pages/Logout'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/users" element={<Users/>}/>
      <Route exact path="/products" element={<Products/>}/>
      <Route exact path="/orders" element={<Orders/>}/>
      <Route exact path="/stats" element={<Stats/>}/>
      <Route exact path="/profile" element={<Profile/>}/>
      <Route exact path="/logout" element={<Logout/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/>
    </Routes>
  )
}

export default App
