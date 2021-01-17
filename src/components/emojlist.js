// import { emojis } from '../Emojis'
// import { Emoji } from '../components/Emoji'

// function Emojilist(props){
//     var {kw} = props
//     var filter = emojis.filter(value=>{
//         if(value.keywords.indexOf(kw)!=-1){
//             return true
//         }
//         else{
//             return false
//         }
//     })

//     var length = filter.length>=20?20:filter.length
//     var listemo = []
//     for ( let i = 0; i < length; i++){
//         listemo.push(
//             <Emoji {...filter[i]}/>
//         )
//     }
//     console.log('filter: ',filter)
//     return (
//         <div>
//           {
//               listemo
//           }
//         </div>
//     )
// }

// export {Emojilist}