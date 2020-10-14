import React, { useState } from 'react'
import Form from './Form';
import ErrorBoundary from './ErrorBoundary';
import Count from './Count';

export default function Blog() {

    const [comments, setComments] = useState([
        { name: 'Sagiv', content: 'Hello buddy' }
    ]);

    const addComment = (newComment) => {
        setComments([...comments, newComment]);
    }

    return (
        <div>
            <h1>Welcome to my Blog!</h1>
            <p>Content...</p>
            {comments.map(item => {
                return (
                    <>
                        <div>Name: {item.name}</div>
                        <div>{item.content}</div>
                    </>
                )
            })}
            <Form addComment={addComment} />
            <ErrorBoundary>
                <Count />
            </ErrorBoundary>
        </div>
    )
}
