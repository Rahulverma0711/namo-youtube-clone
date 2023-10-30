import MicIcon from '@mui/icons-material/Mic';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { toggleMenu } from '../utilities/appSlice';
import { useDispatch } from 'react-redux';
const Header = () => {
  const dispatch=useDispatch();
  const toggleMenuHandler=()=>{
     dispatch(toggleMenu());
  }
  return (
    <div className='header flex'>
       <div className='header-left'>
          <MenuOutlinedIcon className='hamburger-menu' onClick={()=>toggleMenuHandler()}></MenuOutlinedIcon>
          <h2>YouTube<sup className='logo-superscript'>IN</sup></h2>
       </div>
       <div className='header-center flex'>
          <input className=' input-box' type='text'></input>
          <button className='search-btn'><SearchOutlinedIcon fontSize="small" /></button>
          <div className='mic'><MicIcon sx={{ fontSize: 40 }}  className='icons'></MicIcon></div>
       </div>
       <div className='header-right flex'>
          <VideoCallOutlinedIcon sx={{ fontSize: 40 }}  className='hover-icons'></VideoCallOutlinedIcon>
          <NotificationsNoneOutlinedIcon sx={{ fontSize: 40 }}  className='hover-icons'></NotificationsNoneOutlinedIcon>
          <PersonOutlinedIcon sx={{ fontSize: 40 }}  className='hover-icons'></PersonOutlinedIcon>
       </div>   
    </div>
  )
}
export default Header