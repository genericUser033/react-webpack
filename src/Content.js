import React, {useEffect, useState} from 'react'

function Content() {
    // --For all useEffect types: Goi callback sau khi Component them element vao DOM(component mount)
    // --Note to clean up function truoc khi unmount

    // 1. useEffect(callback)
    // --Goi callback moi khi component re-render
    // 2. useEffect(callback, [])
    // -- Goi callback mot lan sau khi component mount
    // 3. useEffect(ham callback, [dependencies])
    // -- Callback se duoc goi lai moi khi dependencies thay doi

    const [width, setWidth] =  useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);//resize is a name of JS
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <div>
            <h1>{width}</h1>
        </div>
    )
}

export default Content;