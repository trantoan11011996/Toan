
import React, { Component } from 'react'
class Product extends Component {
  render() {
    return (
      <div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <div className="thumbnail">
                  <img src={this.props.img} alt=""/>
                  <div className="caption">
                      <h3>
                          {this.props.name}
                      </h3>
                      <p>
                          {this.props.price}
                      </p>
                      <p>
                          <a  className="btn btn-primary">Mua ngay</a>
                          <a  className="btn btn-default">Mua ngay</a>
                      </p>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
export {Product}