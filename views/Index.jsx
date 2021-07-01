const React = require('react');

const capFirtLetter = {
  'textTransform': 'capitalize'
}

class Index extends React.Component {
  render() {
    const products = this.props.products;
    const elements = products.map((product, i) => {
      return(
        <li key={product._id}>
      <a href={`/products/${product._id}`}>{product.name}</a><br/>
      <a href={`/products/${product._id}`}><img src={product.img}/></a><br/>
      </li>
      )
    })

    return(
      <>
        <h1>Products</h1>
        <ul>{elements}</ul>
        <a href="/products/new"><button>Add new Product</button></a>
      </>
    )
  }
}
module.exports = Index;
