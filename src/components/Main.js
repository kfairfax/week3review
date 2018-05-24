import React, { Component } from 'react';
import axios from 'axios'
import Product from './Product'

export default class Main extends Component {
  constructor(props) {
    super(props);
    
    this.state ={
      products:[]
    }
  }
  componentDidMount(){
    axios.get('/api/products').then((res)=>{
      this.setState({
        products:res.data
      })
    })
  }
  
  render() {
    console.log(this.state)
    let mappedProducts = this.state.products.map(e=>{
      return(
        <Product
        product={e.item}
        price = {e.price}
        />
      )
    })
    return (
      <div>
        {mappedProducts}
      </div>
    )
  }
};
