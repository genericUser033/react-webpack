import React, {forwardRef, useImperativeHandle, useRef} from 'react'
import download　from './videos/download.mp4'

function Video(props, ref) {//ref from App
    const videoRef = useRef()

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }));

    return (
        <video
            src={download}
            width={'280'}
            ref={videoRef}
        />
    )
}

export default forwardRef(Video);
//forwardRef receive Video(HOC), read the ref attribute
// truyen ref nhan duoc vao Video