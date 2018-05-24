import React,{Component} from 'react';
const styles = {
  background: 'grey',
  width: '500px',
  margin: '20px'
}
export default class Product extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <div style={styles} >
      <h2>{this.props.product}</h2>
      <h3>${this.props.price}</h3>
      <h3>{this.props.quantity}</h3>
      <button>edit</button>
      <button>delete</button>
    </div>
    )
  }
};

