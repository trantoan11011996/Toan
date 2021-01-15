import '../assets/css/Showbook.css'
function Book(props){
    return(
        <div className='bookinfo'>
                <div className='image'>
                    <img src={'http://books.google.com/books/content?id=5W-ChoTedM4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'} />
                </div>
                <div className='content'>
                    <p>Title : </p>
                    <p>Publisher : </p>
                    <p>Published Date : </p>
                </div>
            </div>
    )
}
export {Book}