import React from 'react';
const styles = {
    background: 'grey',
    width: '500px',
    margin: '20px'
}
export default (props) => {
  return (
    <div style={styles} >
      <h2>{props.product}</h2>
      <h3>{props.price}</h3>
    </div>
  )
};
