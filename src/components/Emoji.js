import '../assets/css/emojis.css'
import '../assets/css/emojilist.css'


function Emoji(props) {
    const {title,symbol} = props
    return(
        <div className='emoji'>
           {symbol} {title} 
        </div>
    )
}
export {Emoji}