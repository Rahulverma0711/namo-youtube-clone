import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
const MainContainer = () => {
  return (
    <div className='main-container'>
    <Sidebar/>
    <Outlet/>
</div>
  )
}
export default MainContainer