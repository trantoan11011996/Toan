import '../assets/css/searchbar.css'
import '../assets/css/emojilist.css'
import {Emojilist} from '../components/emojlist'
import { emojis } from '../Emojis'
import { Emoji } from '../components/Emoji'



function Searchbar(props){
    var {kw} = props
    var filter = emojis.filter(value=>{
        if(value.keywords.indexOf(kw)!=-1){
            return true
        }
        else{
            return false
        }
    })

    var length = filter.length>=40?40:filter.length
    var listemo = []
    for ( let i = 0; i < length; i++){
        listemo.push(
            <Emoji {...filter[i]}/>
        )
    }
    console.log('filter: ',filter)
    return(
    <div className='main'>
        <div className='searchbar'>
            <input type='text' className='input' placeholder='Enter your keyword to find Emoji' onChange={props.change} value={props.kw}></input>
        </div>
        <div className='emojilist'>
            {
                listemo
            }
        </div>
    </div>
    )
}

export {Searchbar}