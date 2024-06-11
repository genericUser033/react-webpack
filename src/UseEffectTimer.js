import React, {useEffect, useState} from 'react'

const totalCount = 180;
function UseEffectTimer() {

    const [countDown, setCountDown] = useState(totalCount);
    // useEffect with timer function
    // Timers: setInterval, setTimeout, clearInterval, clearTimeout
    // Closure
    // 3. Clean up luon duoc goi truoc khi callback duoc goi(tru lan mount)




    return (
        <h1>{countDown}</h1>
    )
}

export default UseEffectTimer

// useEffect(() => {
//     setTimeout(() => { //use the same 'thread'
//         setCountDown(countDown - 1);
//         console.log('Timeout is running');
//     }, 1000);
// },[countDown])

// useEffect(() => {
//     const timerId = setInterval(() => {
//         setCountDown(prev => prev - 1);
//         console.log('Interval is running');
//     }, 1000);
//
//     return () => clearInterval(timerId);
// },[])

// setInterval => bring a listener to window scope