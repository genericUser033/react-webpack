import React, {useEffect, useState} from "react";

const videos = [
    {
        id: 1,
        name: "Introduction to JavaScript"
    },
    {
        id: 2,
        name: "CSS Basics"
    },
    {
        id: 3,
        name: "HTML Fundamentals"
    }
];

function FakeChatApp() {
    const [lessonId, setLessonId] = useState(1);

    useEffect(() => {
        const handleComment = ({detail}) => {
            console.log(detail);
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment)

        return () => window.removeEventListener(`lesson-${lessonId}`, handleComment);
    }, [lessonId])

    return (
        <div>
            <ul>
                {videos.map(video =>
                    <li
                        key={video.id}
                        style={{
                            cursor: "pointer",
                            color: lessonId === video.id ? 'red' : '#333'
                        }}
                        onClick = {() => setLessonId(video.id)}
                    >
                        {video.name}
                    </li>
                )}
            </ul>
        </div>
    )
}
export default FakeChatApp;