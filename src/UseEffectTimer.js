import React, {useEffect, useState} from 'react'

// Timers: setInterval, setTimeout, clearInterval, clearTimeout
// Closure
// 3. Clean up luon duoc goi truoc khi callback duoc goi(tru lan mount)
// setInterval => bring a listener to window scope
function UseEffectTimer() {

    const [avatar, setAvatar] = useState('');

    const handlePreviewData = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file)
        e.target.value = null; //to clear the name of the chosen file
    }

    useEffect(() => {
        // goi ham clean up
        return () => avatar && URL.revokeObjectURL(avatar.preview)
    }, [avatar]);

    return (
        <div>
            <input
                style={{display: 'block', marginBottom: 50}}
                type="file"
                // multiple
                onChange={handlePreviewData}
            />
            {avatar &&
                <img src={avatar.preview} alt='image' width='80%'/>
            }
        </div>
    )
}

export default UseEffectTimer

//useEffect flow
// cap nhat lai state
// cap nhat DOM (mutated - update 1 field... trong object)
// Re-render UI
// goi clean up neu dependencies thay doi
// useEffect goi callback