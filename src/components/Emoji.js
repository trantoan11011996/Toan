 import '../assets/css/Emojilist.css'

 function Emoji(props){
     var {symbol,title} = props
     return(
         <div className='emoji'>
             {symbol} {title}
         </div>
     )
 }
 export {Emoji}