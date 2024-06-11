import React, {useEffect, useState} from 'react'

const tabs = ['posts', 'comments','albums'];

function Content() {
    // --For all useEffect types: Goi callback sau khi Component them element vao DOM(component mount)
    // --Note to cleanup function truoc khi unmount

    // 1. useEffect(callback)
    // --Goi callback moi khi component re-render
    // 2. useEffect(callback, [])
    // -- Goi callback mot lan sau khi component mount
    // 3. useEffect(ham callback, [dependencies])
    // -- Callback se duoc goi lai moi khi dependencies thay doi

    const [selectedTab, setSelectedTab] = useState('posts');
    const [posts, setPosts] = useState([]);
    const [showGoToTop, setShowGoToTop] = useState(false);

    console.log(selectedTab)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${selectedTab}` )
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
        })
    }, [selectedTab]);

    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(scrollY >= 200);
            console.log(scrollY);
        }
        window.addEventListener('scroll', handleScroll) //luu y pham vi cua window

        // clean up function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    console.log('Re-render')
    return (
        <div>
            {tabs.map(tab => (
                <button
                    key={tab}
                    style = {tab === selectedTab ? {
                        background: "black",
                        color:'#FFFFFF'
                    } : {}}
                    onClick={() => setSelectedTab(tab)}
                >
                    {tab}
                </button>
            ))}
            {
                posts.map(post => {
                return <li key={post.id}>{post.title || post.name}</li>
            })}
            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }}
                >
                    Go to top
                </button>)
            }
        </div>
    )
}

export default Content;