import React from 'react'
import '../assets2/appreact.css'
const front = 'https://upload.wikimedia.org/wikipedia/vi/thumb/f/f7/Sugimoris025.png/220px-Sugimoris025.png'
export function Appreact(props) {

    return (
        <div className="card-area " >
            <img className="card-image"
                src={props.front}
                flip={props.isFlip}
                alt="pikachu" />
            <h4>{props.name}</h4>

        </div >
    )
}
