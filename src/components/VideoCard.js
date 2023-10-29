const VideoCard = () => {
  return (
    <div className='video-card'>
        <img className='video-thumbnail' src='https://source.unsplash.com/random/600×400?healthy ' alt='thumbnail'></img>
        <div className='video-detail-container'>
        <div className='channel-img-container'>
            <img className='channel-img' src='https://source.unsplash.com/random/600×400?healthy ' alt='channel img'></img>
        </div>
        <div className='video-detail'>
            <h1>Responsive Dropdown sidebar menu using Html and CSS</h1>
            <p>Coding lab</p>
            <p>524K views . 2 years ago</p>
        </div>
        </div>

  </div>
  )
}
export default VideoCard