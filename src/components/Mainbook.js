import '../assets/css/Mainbook.css'

function Mainbook(props){
    return(
        <div className='mainbook'>
           <div className='image'>
               <img src={props.volumeInfo.imageLinks?props.volumeInfo.imageLinks.smallThumbnail:'http://books.google.com/books/content?id=5W-ChoTedM4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'}/>
           </div>
           <div className='content'>
              <p> Authors : {props.volumeInfo.authors}</p>
              <p> published Date : {props.volumeInfo.publishedDate}</p>
              <a href={props.volumeInfo.previewLink} target='_blank' >Click for more info</a>
           </div>
        </div>
        
    )
}

export {Mainbook}