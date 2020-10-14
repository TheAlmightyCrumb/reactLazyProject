import React, { useState, useEffect } from 'react'
import Form from './Form';
import ErrorBoundary from './ErrorBoundary';
import Count from './Count';
import { read } from '../Network/CRUD';

export default function Blog() {
    
    const [comments, setComments] = useState([]);
    
    useEffect(() => {
        read('/comments/read').then(res => setComments(res))
    }, []);
    
    const addComment = (newComment) => {
        setComments([...comments, newComment]);
    }

    return (
        <div>
            <h1>Welcome to my Blog!</h1>
            <p>Content...</p>
            {comments.map((item, i) => {
                return (
                    <div key={i}>
                        <div>Name: {item.name}</div>
                        <div>{item.content}</div>
                        <br />
                    </div>
                )
            })}
            <Form addComment={addComment} />
            <ErrorBoundary>
                <Count />
            </ErrorBoundary>
        </div>
    )
}
