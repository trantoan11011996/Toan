import '../assets/css/Showbook.css'
function Book(props){
    console.log('this is book : ',props)
    return(
        <div className='bookinfo'>
                <div className='image'>
                    <img src={props.volumeInfo.imageLinks?props.volumeInfo.imageLinks.smallThumbnail:'http://books.google.com/books/content?id=5W-ChoTedM4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'} />
                </div>
                <div className='content'>
                    <p>Title : {props.volumeInfo.title}</p>
                    <p>Publisher : {props.volumeInfo.publisher} </p>
                    <p>Published Date : {props.volumeInfo.publishedDate} </p>
                </div>
            </div>
    )
}
export {Book}