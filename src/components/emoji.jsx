import '../assets/css/emoji.css'
function Emoji(props){
    console.log('this is props: ',props) 
    const {symbol,title} = props   /////// props.symbol == symbol
    return (
        <div className='emoji-cont'>
                {symbol} {title}         
        </div>
    )
}
export {Emoji}