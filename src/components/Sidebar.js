import HomeIcon from '@mui/icons-material/Home';
import SmsFailedOutlinedIcon from '@mui/icons-material/SmsFailedOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import VideoSettingsOutlinedIcon from '@mui/icons-material/VideoSettingsOutlined';
import PodcastsOutlinedIcon from '@mui/icons-material/PodcastsOutlined';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import { useSelector } from "react-redux";
const subscriptionList=["Aaj tak","Durga Software","English Speeches","Abhishek Upamanyu","Amit Bhadana","T-Series","Abhishek Upamanyu","Amit Bhadana","T-Series"];

const Sidebar = () => {
  const isMenu=useSelector((store)=>store.app.isMenuOpen);
  if(!isMenu) return null;
  return (
    <div className='sidebar'>
      <ul>
        <li className='sidebar-item flex' >
          <HomeIcon className='icon'/>
          <h4>Home</h4>
        </li>
        
        
        <li className='sidebar-item flex' >
          <SlowMotionVideoIcon className='icon'/>
          <h4>Shorts</h4>
        </li>
        <li className='sidebar-item flex' >
          <SmartDisplayOutlinedIcon className='icon'/>
          <h4>Subscription</h4>
        </li>

        <li className='dashed'></li>

        <li className='sidebar-item flex' >
          <h4>You</h4>
          <KeyboardArrowRightOutlinedIcon className='icon'/>
          
        </li>
        <li className='sidebar-item flex' >
          <AccountBoxOutlinedIcon className='icon'/>
          <h4>Your channel</h4>
        </li>
        <li className='sidebar-item flex' >
          <HistoryOutlinedIcon className='icon'/>
          <h4>History</h4>
        </li>
        <li className='sidebar-item flex' >
          <SlideshowOutlinedIcon className='icon'/>
          <h4>Your videos</h4>
        </li>
        <li className='sidebar-item flex' >
          <LightbulbOutlinedIcon className='icon'/>
          <h4>Your courses</h4>
        </li>
        <li className='sidebar-item flex' >
          <AccessTimeOutlinedIcon className='icon'/>
          <h4>Watch Later</h4>
        </li>
        <li className='sidebar-item flex' >
          <KeyboardArrowDownOutlinedIcon className='icon'/>
          <h4>Show more</h4>
        </li>
        <li className='dashed'></li>
        <li className='subscription-text'>
          Subscriptions
        </li>
        <li className='sidebar-item flex' >
          <InsertEmoticonOutlinedIcon className='icon'/>
          <h4>Show more</h4>
        </li>
        {
          subscriptionList.map((channelName,index)=>{return <li  key={index} className='sidebar-item flex' >
          <InsertEmoticonOutlinedIcon className='icon'/>
          <h4>{channelName}</h4>
        </li> })
        }
        <li className='dashed'></li>

        <li className='subscription-text'>
          Explore
        </li>
        <li className='sidebar-item flex' >
          <LocalFireDepartmentOutlinedIcon className='icon'/>
          <h4>Trending</h4>
        </li>
        <li className='sidebar-item flex' >
          <ShoppingBagOutlinedIcon className='icon'/>
          <h4>Shopping</h4>
        </li>
        <li className='sidebar-item flex' >
          <MusicNoteOutlinedIcon className='icon'/>
          <h4>Music</h4>
        </li>
        <li className='sidebar-item flex' >
          <MovieCreationOutlinedIcon className='icon'/>
          <h4>Films</h4>
        </li>
        <li className='sidebar-item flex' >
          <SensorsOutlinedIcon className='icon'/>
          <h4>Live</h4>
        </li>
        <li className='sidebar-item flex' >
          <SensorsOutlinedIcon className='icon'/>
          <h4>Gaming</h4>
        </li>
        <li className='sidebar-item flex' >
          <NewspaperOutlinedIcon className='icon'/>
          <h4>News</h4>
        </li>
        <li className='sidebar-item flex' >
          <SportsEsportsOutlinedIcon className='icon'/>
          <h4>Sports</h4>
        </li>
        <li className='sidebar-item flex' >
          <LightbulbOutlinedIcon className='icon'/>
          <h4>Learing</h4>
        </li>
        <li className='sidebar-item flex' >
          <CheckroomOutlinedIcon className='icon'/>
          <h4>Fashion & beauty</h4>
        </li>
        <li className='sidebar-item flex' >
          <PodcastsOutlinedIcon className='icon'/>
          <h4>Podcast</h4>
        </li>
        <li className='dashed'></li>
        <li className='subscription-text'>
          More from YouTube
        </li>
        <li className='sidebar-item flex' >
          <VideoSettingsOutlinedIcon className='icon'/>
          <h4>YouTube Premium</h4>
        </li>
        <li className='sidebar-item flex' >
          <VideoSettingsOutlinedIcon className='icon'/>
          <h4>YouTube Studio</h4>
        </li>
        <li className='sidebar-item flex' >
          <VideoSettingsOutlinedIcon className='icon'/>
          <h4>YouTube Music</h4>
        </li>
        <li className='sidebar-item flex' >
          <VideoSettingsOutlinedIcon className='icon'/>
          <h4>YouTube Kids</h4>
        </li>

         <li className='dashed'></li>

        <li className='sidebar-item flex' >
          <SettingsOutlinedIcon className='icon'/>
          <h4>Setting</h4>
        </li>
        <li className='sidebar-item flex' >
          <OutlinedFlagIcon className='icon'/>
          <h4>Report history</h4>
        </li>
        <li className='sidebar-item flex' >
          <HelpOutlineOutlinedIcon className='icon'/>
          <h4>Help</h4>
        </li>
        <li className='sidebar-item flex' >
          <SmsFailedOutlinedIcon className='icon'/>
          <h4>Send feedback</h4>
        </li>

        <li className='dashed'></li>

        <li className='sidebar-footer-container'>
          <div className='flex sidebar-footer'>
          <h5>About</h5>
          <h5>Press</h5>
          <h5>Copyright</h5>
          <h5>Contact us</h5>
          <h5>Creator</h5>
          <h5>Advertise</h5>
          <h5>Developers</h5>
          </div>
          <div className='flex sidebar-footer'>
          <h5>Terms</h5>
          <h5>Privacy</h5>
          <h5>Policy & Safety</h5>
          <h5>How YouTube Works</h5>
          <h5>Test new features</h5>
          </div>
          <div className='sidebar-footer'>
            <p>@2023 Google LLC</p>
          </div>
    
        </li>
      </ul>
    </div>
  )
}
export default Sidebar