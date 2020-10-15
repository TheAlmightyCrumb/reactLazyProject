import React, { useRef, useEffect } from 'react'
import { create } from '../Network/CRUD';

export default function Form(props) {

    const nameInput = useRef();
    const contentInput = useRef();
    const { addComment } = props;

    const onNameKeyUp = (e) => {
        if (e.key === 'Enter') contentInput.current.focus();
    }

    const onSubmit = async () => {
        addComment({
            name: nameInput.current.value,
            content: contentInput.current.value
        })
        await create('/comments/create', {
            name: nameInput.current.value,
            content: contentInput.current.value
        })
        nameInput.current.value = '';
        contentInput.current.value = '';
    }

    useEffect(() => {
        nameInput.current.focus();
    }, [])

    return (
        <div id="form">
            <input className='name-input' ref={nameInput} onKeyUp={(e) => onNameKeyUp(e)} placeholder='Name...' />
            <input className='comment-input' ref={contentInput} placeholder='Share your thoughts...' />
            <button className='add-comment-btn' onClick={() => onSubmit()}>Add Comment</button>
        </div>
    )
}
