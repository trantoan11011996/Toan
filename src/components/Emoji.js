 import '../assets/css/Emojilist.css'

 function Emoji(props){
     var {symbol,title} = props
     console.log('symbol: ',symbol)
     console.log('title: ',title)
     return(
         <div className='emoji'>
             {symbol} {title}
         </div>
     )
 }
 export {Emoji}