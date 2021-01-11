
import { Emoji } from './emoji'
import { emojis } from '../Emojis'
import '../assets/css/Emojilist.css'



function EmojiList(props){
    const list = []
    for (let i = 0 ; i<20;i++){
        list.push(
            <Emoji{...emojis[i]}/>
        )
    }
    console.log('lissssst: ',list)
    return(
        <div className='emojilist-cont'>
            {
                list
            }
        </div>  
    )
}

export {EmojiList}