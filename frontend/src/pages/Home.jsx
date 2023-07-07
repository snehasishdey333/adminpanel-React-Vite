import Layout from "../components/Layout"
import Widget from "../components/Widget"
import {FaUsers} from 'react-icons/fa'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {GrMoney} from 'react-icons/gr'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {BiUpArrowAlt,BiDownArrowAlt} from 'react-icons/bi'
import Chart from '../components/Chart'
import '../scss/Home.scss'
import CircularProgressBarWidget from "../components/CircularProgressBarWidget"
import List from "../components/List"

const Home = () => {
  
  return (
    <>
    <Layout>
      <div className=" flex-6 w-full flex flex-col ">
          <div className="grid gap-12 grid-cols-1 md:grid-cols-3">
             <Widget title={"USERS"} num={"120"} percentage={20} desc={"See all users"} icon={<FaUsers/>} color="#FFD0D0" iconColor="red" arrow={<BiUpArrowAlt/>} percentageColor="green"/>
             <Widget title={"ORDERS"} num={"17"} percentage={33} desc={"See all orders"} icon={<AiOutlineShoppingCart/>} color="#FFF8BC" iconColor="orange" arrow={<BiDownArrowAlt/>} percentageColor="red"/>
             <Widget title={"REVENUE"} num={"₹12300"} percentage={11} desc={"See all earnings"} icon={<GrMoney/>} color="#ADE792" iconColor="deepgreen" arrow={<BiUpArrowAlt/>} percentageColor="green"/>
          </div>

          <div className="flex flex-col md:flex-row mt-10 md:space-x-4">
               <CircularProgressBarWidget/>
               <Chart/>
          </div>
          <List/>
      </div>
    </Layout>
    </>
  )
}

export default Home
