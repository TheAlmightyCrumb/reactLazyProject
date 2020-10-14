import React, { useRef, useEffect } from 'react'

export default function Form(props) {

    const nameInput = useRef();
    const contentInput = useRef();
    const { addComment } = props;

    const onNameKeyUp = (e) => {
        if (e.key === 'Enter') contentInput.current.focus();
    }

    const onSubmit = () => {
        addComment({
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
        <div>
            <input ref={nameInput} onKeyUp={(e) => onNameKeyUp(e)} placeholder='Name...' />
            <input ref={contentInput} placeholder='Share your thoughts...' />
            <button onClick={() => onSubmit()}>Add Comment</button>
        </div>
    )
}
