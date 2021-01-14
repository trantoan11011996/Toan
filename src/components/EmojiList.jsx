
import { Emoji } from './emoji'
import { emojis } from '../Emojis'
import '../assets/css/Emojilist.css'



function EmojiList(props){
    const { kw } = props 
    console.log('props: ',props)
    const filter = emojis.filter(val=>{
        if (val.keywords.indexOf(kw)!=-1){    ///neesu kw co nam trong keywors thi khac -1
            return true
        }
        else{
            return false
        }
    })
    const lenght = filter.length>=20?20:filter.length
    const list =[]
    for (let i =0 ; i<lenght;i++){
        list.push(
            <Emoji {...filter[i]}/>
        )
    }
    console.log('filter: ',filter)
    return(
        <div className='emojilist-cont'>
            {
                list
            }
        </div>  
    )
}

export {EmojiList}