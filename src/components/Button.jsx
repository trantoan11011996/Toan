import React from 'react'

class Button extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <p> this is button</p>
                <button>click me</button>
            </div>
        )
    }
}
export{
    Button
}