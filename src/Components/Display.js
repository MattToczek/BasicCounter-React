import React from 'react'

export default function Display(props) {
    return (
        <div className="numRead">
            <h1>
                {props.counter}
            </h1>
        </div>
    )
}
