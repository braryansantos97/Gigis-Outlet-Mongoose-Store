const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Show extends React.Component {
  render() {
    const product = this.props.product;
    return(
      <DefaultLayout title={`${product.name.toUpperCase()} Show Page`}>
        {product.name}<br/>
        <img src={product.img}/>
        {product.description}<br/>
        ${product.price}<br/>
        {product.qty} in stock<br/>
        <button>BUY</button><br/>
        <a href="/products">back</a><br/>
        <a href={`/products/${product._id}/edit`}>Edit This Product</a><br/>
        <form action={`/products/${product._id}?_method=DELETE`} method="POST">
        <input type="submit" value="DELETE"/>
        </form>
      </DefaultLayout>
    )
  }
}
module.exports = Show
