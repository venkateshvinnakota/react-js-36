import './index.css'

import ReactPlayer from 'react-player'

const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="heading">Video Player</h1>
    <div className="responsive-container">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=KioBGfg9NYY"
        controls={true}
      />
    </div>
  </div>
)

export default VideoPlayer
