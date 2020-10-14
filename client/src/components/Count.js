import React, { useState } from 'react'

export default function Count() {

    const [count, setCount] = useState(true);
    if (!count) throw Error('New Error');

    return (
        <div id='error-btn'>
            <button onClick={() => setCount(false)}>Check Our Error Handling!</button>
        </div>
    )
}
