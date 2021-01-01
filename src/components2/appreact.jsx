
import React from "react"
import '../assets2/appreact.css'

class Appreact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOn: true
        }
    }
    change (){
        if(this.state.isOn == true){
            this.setState({isOn:false})
            document.getElementById('anouce2').innerHTML='hãy click để bật sáng tôi lênnn'
            document.getElementById('anouce').innerHTML=" "
        }
        else{
        this.setState({isOn:true})
        document.getElementById('anouce').innerHTML = 'hãy click vào tui nào'
        document.getElementById('anouce2').innerHTML=' '
        }
    }
    render() {
        return (
            <div className='container'>
                <img src={this.state.isOn == true ? 'on.jpg' : 'off.jpg'} alt='light' className='image'></img>
                <input type='button' value='switch' onClick={() => this.change()}></input>
                <a href="https://vi.wikipedia.org/wiki/Thomas_Edison" id='anouce'></a>
                <p id='anouce2'></p>
            </div>
        )
    }
}
export{
    Appreact
}