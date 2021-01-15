import { Component } from 'react'
import '../assets/css/Searchbar.css'

function SearchBar(props) {
    console.log('this searchbar: ',props)
        return (
            <div className='searchbar-cont'>
                <input className='input' type='text' placeholder="enter your Book Name" onKeyDown={props.search}  />
            </div>
        )
    }
export { SearchBar } 