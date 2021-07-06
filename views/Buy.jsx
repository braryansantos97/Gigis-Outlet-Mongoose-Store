const React = require('react');

class Buy extends React.Component {
  render() {
    const product = this.props.product;
    return(
      <DefaultLayout title={`${product.name.toUpperCase()} Buy Page`}>
        Thank you for your purchase of {product.name}<br/>
        <img src={product.img}/>
        {product.qty} in stock<br/>
        <a href="/products">back</a><br/>
      </DefaultLayout>
    )
  }
}
module.exports = Buy;
