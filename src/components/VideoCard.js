import { type } from "@testing-library/user-event/dist/type";

const VideoCard = ({info}) => {
  const{snippet,statistics}=info;
  const{thumbnails,title,channelTitle}=snippet;
  const {url}=thumbnails.standard;
  const{viewCount}=statistics;
  const viewCountNum=parseInt(viewCount,10);
  const formatCompactNumber=(number)=>{
    if (number < 1000) {
      return number;
    } else if (number >= 1000 && number < 1_000_000) {
      return (number / 1000).toFixed(1) + "K";
    } else if (number >= 1_000_000 && number < 1_000_000_000) {
      return (number / 1_000_000).toFixed(1) + "M";
    } else if (number >= 1_000_000_000 && number < 1_000_000_000_000) {
      return (number / 1_000_000_000).toFixed(1) + "B";
    } else if (number >= 1_000_000_000_000 && number < 1_000_000_000_000_000) {
      return (number / 1_000_000_000_000).toFixed(1) + "T";
    }
  }
  const views=formatCompactNumber(viewCountNum);
  return (
    <div className='video-card'>
        <img className='video-thumbnail' src={url}alt='thumbnail'></img>
        <div className='video-detail-container'>
        <div className='channel-img-container'>
            <img className='channel-img' src={url} alt='channel img'></img>
        </div>
        <div className='video-detail'>
            <h1>{title}</h1>
            <p>{channelTitle}</p>
            <p> {views} views <span>&#183;</span> 2 years ago</p>
        </div>
        </div>

  </div>
  )
}
export default VideoCard