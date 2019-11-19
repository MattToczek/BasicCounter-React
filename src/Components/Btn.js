import React from 'react'

export default function Btn(props) {
    return (
        <React.Fragment>
            <a onClick = {props.btnFunc} href="#" className="btn">{props.label}</a>
        </React.Fragment>
    )
}
