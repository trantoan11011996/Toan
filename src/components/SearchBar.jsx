import { Component } from 'react'
import '../assets/css/SearchBar.css'

function SearchBar(props) {
    console.log('this searchbar: ',props)
        return (
            <div className='searchbar-cont'>
                <input className='input' type='text' placeholder="enter your Emoji" onChange={props.change} value={props.kw}  />
            </div>
        )
    }
export { SearchBar } 