import React, {useEffect, useState} from 'react'

function Content() {
    // --For all useEffect types: Goi callback sau khi Component them element vao DOM

    // 1. useEffect(callback)
    // --Goi callback moi khi component re-render
    // 2. useEffect(callback, [])
    // -- Goi callback mot lan sau khi component mount
    // 3. useEffect(ham callback, [dependencies])
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        //callback luon duoc goi sau khi component mount
        document.title = title;

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
        })
    }, []);



    return (
        <div>
            <input value={title} onChange={(event) => {
               setTitle(event.target.value);
            }} />
            <ul>
                {
                    posts.map(post => {
                    return <li key={post.id}>{post.title}</li>
                })}
            </ul>
        </div>
    )
}

export default Content;