const React = require('react');
const DefaultLayout = require('./layouts/Default');


class Buy extends React.Component {
  render() {
    const product = this.props.product;
    return(
      <DefaultLayout title={`Buy ${product.name}`} styles={[{key: 0, href: ''}, { key: 1, href: '/css/buypage.css'}]}>
        Thank you for your purchase of {product.name}<br/>
        <img src={product.img}/><br/>
        Now there is {product.qty} in stock<br/>
        <a href={`/products/${product._id}`}><button>back</button></a><br/>
      </DefaultLayout>
    )
  }
}
module.exports = Buy;
