import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import track from '../Analytics/Mixpanel';

export default function Bravo() {

    useEffect(() => {
        track("Commented Successfully");
    }, [])

    return (
        <div>
            <h1>BRAVO!</h1>
            <p>You have successfully added a comment. Good job mate :D</p>
            <Link to="/" onClick={() => track("Coming Home")}>Back Home</Link>
        </div>
    )
}
