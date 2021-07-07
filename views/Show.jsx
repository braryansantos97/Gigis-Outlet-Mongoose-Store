const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Show extends React.Component {
  render() {
    const product = this.props.product;
    const checkqty = () => {
      if(product.qty > 0) {
        return(
          <>
          <a href={`/products/${product._id}/buy`} id="btn"><button>BUY</button></a><br/>
          </>
        )
      }else {
        return(
          <>
          <h3>Out of stock</h3><br/>
          </>
        )
      }
    }
    return(
      <DefaultLayout title={product.name} styles={[{key: 0, href: ''}, { key: 1, href: '/css/showpage.css'}]}>
      <div className="wrapper">
        <div>
          <img src={product.img}/>
        </div>
        <div>
          {product.description}<br/>
          ${product.price}<br/>
          {product.qty} in stock<br/>
          {checkqty()}
          <a href="/products"><button>Back</button></a><br/>
          <a href={`/products/${product._id}/edit`}><button>Edit This Product</button></a><br/>
          <form action={`/products/${product._id}?_method=DELETE`} method="POST">
          <button>DELETE</button>
          </form>
        </div>
      </div>
      </DefaultLayout>
    )
  }
}
module.exports = Show
