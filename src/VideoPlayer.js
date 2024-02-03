import React, { useState } from 'react';
import './VideoPlayer.css'
function VideoPlayer() {
  const [videoURL, setVideoURL] = useState('');
  
  const handleChange = (event) => {
    setVideoURL(event.target.value);
  };

  return (
    <div className="App">
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          type="text"
          value={videoURL}
          onChange={handleChange}
          placeholder="Enter YouTube Video URL"
          required
        />
      </form>
      <div className='moviediv'>
      {videoURL && (
        <div style={{ marginTop: '0px' }}>
          <iframe
            title="YouTube Video Player"
            width="560"
            height="315"
            src={videoURL.replace('watch?v=', 'embed/')}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
      </div>
      
    </div>
  );
}



export default VideoPlayer;

