import React, { Component } from 'react'
import '../assets/Product.css'

class Product extends Component {
  render() {
    return (
     
     <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
         <div className="thumbnail">
             <img/>
             <div className="caption">
                 <img src='https://24hstore.vn/images/products/2020/10/14/large/iphone-12-red.jpg' />
                 <h3>Iphone12</h3>
                 <p>
                     23.000.000vnd
                 </p>
                 <p>
                     <a  className="btn btn-primary">Action</a>
                     <a  className="btn btn-default">Action</a>
                 </p>
             </div>
         </div>
     </div>
     

    )
  }
}
export {Product}