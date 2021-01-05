import React from 'react'
import '../assets/css/Lightbulb.css'

class Lightbulb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOn:true
        }
    }
    switch () {
        if(this.state.isOn===true){
            this.setState({isOn:false})   //thay đổi trạng thái view bên màn hình hiển thị (state : trạng thái)
        }
        else{
            this.setState({isOn:true})
        }
        console.log('switch: ',this.state.isOn)
    }
    render() {   // hiển thị
        return (
            <div className="container">
                <img src={this.state.isOn === true ?"on.jpg":"off.jpg"}  alt="bulb" className="image"/>
    
                <input type="button" value="switch"  onClick={()=>this.switch()}></input>
            </div>
        )
    }
}
export {
    Lightbulb
}