import '../assets/css/Emojilist.css'
import {random} from '../emoji'
import {Emoji} from '../components/Emoji'



function Emojilist(props){
  
    var {kw} = props
    var listemo = random.filter(value =>{
        if (value.keywords.indexOf(kw)!=-1){
            return true
        }
        else{
            return false
        }
    })
    var length =listemo.length>=30?30:listemo.length
    var list = []
    for (let i = 0; i<length; i++){
        list.push(
            <Emoji{...listemo[i]}/>
        )
    }
    console.log('listemo: ',listemo)
    console.log('list: ',list)
    return(
        <div className='boxshow'>
            <div className='emoji'>
                {
                    list
                }
                    
                
            </div>
        </div>
    )
}
export {Emojilist}