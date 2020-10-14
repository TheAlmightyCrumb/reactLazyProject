import React, { useState } from 'react'

export default function Count() {

    const [count, setCount] = useState(true);
    if (!count) throw Error('New Error');

    return (
        <div>
            <button onClick={() => setCount(!count)}>Check Our Error Handling!</button>
        </div>
    )
}
