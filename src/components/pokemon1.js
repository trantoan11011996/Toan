import '../assets/css/header.css'
function Pokemon(props){
    console.log('this is props: ',props) 
    const {avatar} = props   
    return (
        <div className='img'>
                {avatar}          
        </div>
    )
}
export {Pokemon}