const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Show extends React.Component {
  render() {
    const product = this.props.product;
    return(
      <DefaultLayout title={product.name} styles={[{key: 0, href: ''}, { key: 1, href: '/css/showpage.css'}]}>
      <div>
        <img src={product.img}/><br/>
      </div>
      <div>
      {product.description}<br/>
        ${product.price}<br/>
        {product.qty} in stock<br/>
        <a href="/products/:id/buy"><button>BUY</button></a><br/>
        <a href="/products"><button>Back</button></a><br/>
        <a href={`/products/${product._id}/edit`}><button>Edit This Product</button></a><br/>
      </div>
        <form action={`/products/${product._id}?_method=DELETE`} method="POST">
        <button>DELETE</button>
        </form>
      </DefaultLayout>
    )
  }
}
module.exports = Show
