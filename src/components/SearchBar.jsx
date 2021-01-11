import { Component } from 'react'
import '../assets/css/SearchBar.css'

 class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            kw:''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(ev){
        this.setState({kw : ev.target.value})
    }  /// khai bao ham o day 
    render(){
        console.log(this.state)

        return(
            <div className='searchbar-cont'>
            <input className='input' type='text' placeholder="enter your Emoji" onChange={this.handleChange} value={this.state.kw}/> 
            </div>
        )
    }
}
export {SearchBar} 