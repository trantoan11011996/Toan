import { firebaseConfig } from '../config/config.firebase'
import 'firebase/firestore'
import firebase from 'firebase/app'
try {
    firebase.initializeApp(firebaseConfig)
} catch (e) {
    console.log('firebase app was installed')
}
    const db = firebase.firestore()
// console.log('db : ', db)
// function signup(userinfromation) {
//     return new Promise((resolve, reject) => {
//         const { username, password } = userinfromation
//         db.collection('user').where('username', '==', username)
//             .get()
//             .then(querySnapshot => {
//                 if (!querySnapshot.empty) {
//                    throw new Error ('user was exsited')
//                 }  
//             })
//             .then(()=>{
//                 db.collection('user')
//                 .add({
//                     username:username,
//                     password:password,
//                 })
//                 .then(data =>{
//                     console.log('sign up succesful')
//                     console.log('data id : ', data.id)
//                     resolve(data.id)
//                 })
//             })
//             .catch(err=>{
//                 reject(err)
//             })

//     })


// }

// export { signup }


export function addTodo(todoinformation){
    return new Promise((resolve,reject)=>{
        const { title,ownerid,content }  = todoinformation
         db.collection('todo').add({
            title : title,
            ownerid : ownerid,
            content : content,
        })
        .then(data=>{
            console.log(data.id)
            console.log(title)
            console.log(ownerid)
            console.log(content)
        })
    })
}

export function edittodo(todoinformation){
    return new Promise((resolve,reject)=>{
        const { title,content,todoID }  = todoinformation
         db.collection('todo').doc(todoID).set({
            title : title,
            // content : content,
        })
        console.log(title)
        
        })
}