import './App.css'
import React, {useEffect, useRef} from 'react'
import Video from "./Video";

function App() {
    const videoRef = useRef();

    useEffect(() => {
        //used so that ctr goi callback sau khi component them element vao DOM
        console.log(videoRef.current)
    });

    const handlePlay = () => {
        videoRef.current.play();
    }

    const handlePause = () => {
        videoRef.current.pause();
    }

    return (
        <div>
            <Video ref={videoRef} />
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>
    )
};

export default App;