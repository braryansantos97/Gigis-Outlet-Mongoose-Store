const React = require('react');
const DefaultLayout = require('./layouts/Default');

const capFirtLetter = {
  'textTransform': 'capitalize'
}

class Index extends React.Component {
  render() {
    const products = this.props.products;
    const elements = products.map((product, i) => {
      return(
        <li key={product._id}>
        {product.name}<br/>
        <a href={`/products/${product._id}`}><img src={product.img}/></a><br/>
        </li>
      )
    })

    return(
      <DefaultLayout title={"Gigi's Outlet"} styles={[{key: 0, href: ''}, { key: 1, href: '/css/indexpage.css'}]}>
        <h2>Our Products</h2>
        <ul>{elements}</ul>
        <a href="/products/new"><button>Add new Product</button></a>
      </DefaultLayout>
    )
  }
}
module.exports = Index;
