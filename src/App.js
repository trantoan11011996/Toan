import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { Product } from './Components/Product'

class App extends Component {
  render() {
    const product = [
      {
        id: 1,
        name: 'Iphone Xr 64Gb',
        price: '11.000.000',
        img: 'https://cdn.tgdd.vn/Products/Images/42/204184/iphone-xr-128gb-den-400x400.jpg',
        status: true,
      },
      {
        id: 2,
        name: 'SamSung S10',
        price: '9.500.000',
        img: 'https://cdn.tgdd.vn/Products/Images/42/161554/sieu-pham-galaxy-s-black-400x400.jpg',
        status: false,
      },
      {
        id: 3,
        name: 'Oppo f11',
        price: '9.000.000',
        img: 'https://cf.shopee.vn/file/c98556cb0775a44254306c7a2e74dd29',
        status: true,
      },
      {
        id: 4,
        name: 'Huawei p30',
        price: '8.000.000',
        img: 'https://cdn.tgdd.vn/Products/Images/42/211157/huawei-p40-600x600-2-200x200.jpg',
        status: true,
      },
    ]
    const element = product.map((user, index) => {
   
      if(user.status == true){
      return <Product
        key={user.id}
        price={user.price}
        img={user.img}
        name = {user.name}>
      </Product>
      }
    })
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand">Props</a>
        </nav>
        <div className='container'>
          <div className="row">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">\
              {
                  element
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App
