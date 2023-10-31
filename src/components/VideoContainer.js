import ButtonList from "./ButtonList"
import VideoCard from "./VideoCard"
import { useEffect, useState } from "react"
import { VideoApi } from "../utilities/constants";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videosList,setVideosList]=useState([]);
  useEffect(()=>{
    getVideos();
  },[]);
  const getVideos=async()=>{
    const data=await fetch(VideoApi);
    const json=await data.json();
    console.log(json);
    setVideosList(json.items);
  }
  if(!videosList) return null;
  return (
    <div className="main-video-container">
      
      <ButtonList/>
      <div className='video-container'>
      {videosList.map((video)=>{
        return <Link to={"watch?v="+video.id} className="link">
          <VideoCard info={video} key={video.id}/>
        </Link>
        })}
      </div>

    </div>

  )
}
export default VideoContainer