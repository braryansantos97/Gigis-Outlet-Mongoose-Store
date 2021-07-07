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
        <div key={product._id} className="product">
        {product.name}<br/>
        <a href={`/products/${product._id}`}><img src={product.img}/></a>
        </div>
      )
    })

    return(
      <DefaultLayout title={"Gigi's Outlet"} styles={[{key: 0, href: ''}, { key: 1, href: '/css/indexpage.css'}]}>
        <h2>Our Products</h2>
        <div className="products-container">
          {elements}
        </div>
        <a href="/products/new"><button>Add new Product</button></a>
      </DefaultLayout>
    )
  }
}
module.exports = Index;
