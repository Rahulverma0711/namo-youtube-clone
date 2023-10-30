import ButtonList from "./ButtonList"
import VideoCard from "./VideoCard"

const VideoContainer = () => {
  return (
    <div className="main-video-container">
      
      <ButtonList/>
      <div className='video-container'>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
      </div>

    </div>

  )
}
export default VideoContainer