import React, {useEffect} from 'react'

function Content() {

    // useEffect(ham callback, [dependencies])
    useEffect(() => {
        //callback luon duoc goi sau khi component mount
        console.log("Mounted")
    })

    return (
        <div>Xin chao anh em </div>
    )
}

export default Content;