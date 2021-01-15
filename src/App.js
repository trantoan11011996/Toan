import './App.css';
import React, { Component } from 'react'
class App extends Component {
  showproduct(product){
    if(product.status){
      return <h1>
      id = {product.id}<br></br>
      value = {product.name1}<br></br>
      price = {product.price}<br></br>
      status : {product.status? 'active': 'pending'}
      </h1>
    }
  }
  render() {
    const a = 5
    const b = 6
    const name = 'toan'
    const productt = {
      id: 1,
      name1: 'iphone xr',
      price: '12.000.000',
      status : true,
    }
    const users =[
      {
        id : 1,
        name : 'Nguyen thi A',
        age : '18',
      },
      {
        id : 2,
        name : 'Nguyen thi B',
        age : '19',
      },
      {
        id : 3,
        name : 'Nguyen thi C',
        age : '20',
      },
    ]
    const element = users.map((user,index) => {
      return  <div key={user.id}>
          <h2>
           Name : {user.name}
          </h2>
          <p>
            Age : {user.age}
          </p>
      </div>
    })
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand" >Title</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a>Home</a>
            </li>
            <li>
              <a>Link</a>
            </li>
          </ul>
        </nav>
        <div className='cont'>
          {a}<br></br>
          {b}<br></br>
          {a + b} <br></br>
          {name}<br></br>
            {this.showproduct(productt)}
          <br></br>
          <hr></hr>
          { element}
        </div>
      </div>
    )
  }
}
export default App