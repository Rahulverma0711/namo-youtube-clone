import ButtonList from "./ButtonList"
import VideoCard from "./VideoCard"
import { useEffect, useState } from "react"
import { VideoApi } from "../utilities/constants";
const url = 'https://youtube-trending.p.rapidapi.com/trending?country=IN&type=gaming';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6ebfb6c722msh70c5e38d56561e4p11add2jsnab506be43a9d',
		'X-RapidAPI-Host': 'youtube-trending.p.rapidapi.com'
	}
};
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
      {videosList.map((video)=>{return <VideoCard info={video} key={video.id}/>})}
      </div>

    </div>

  )
}
export default VideoContainer