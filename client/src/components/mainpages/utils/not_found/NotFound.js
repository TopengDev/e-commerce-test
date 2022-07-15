import React from 'react'
import './NotFound.css'
import X from './x.svg'

function NotFound() {
    return (

        <div className="tc">
            <img src={X} alt="" className="x"/>
            <h1 className="text404">Error 404</h1>
            <h1 className="text">The page you're looking for does not exist</h1>
        </div>
    )
}

export default NotFound
