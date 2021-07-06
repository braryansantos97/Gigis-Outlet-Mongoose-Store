const React = require('react');
const DefaultLayout = require('./layouts/Default')

class Edit extends React.Component {
  render() {
    return (
    <DefaultLayout title="Edit Product" styles={[{key: 0, href: ''}, { key: 1, href: '/css/editpage.css'}]}>
      <form method="POST" action={`/products/${this.props.product._id}?_method=PUT`}>
        <input type="text" name="name" placeholder="Name" defaultValue={this.props.product.name}/><br/>
        <input type="text" name="img" placeholder="Image url" defaultValue={this.props.product.img}/><br/>
        <input type="text" name="description" placeholder="Description" defaultValue={this.props.product.description}/><br/>
        <input type="number" name="price" placeholder=" " defaultValue={this.props.product.price}/><br/>
        <input type="number" name="qty" placeholder="Quantity" defaultValue={this.props.product.qty}/><br/>
        <button>Save Changes</button>
      </form>
    </DefaultLayout>
    )
  }
}


module.exports = Edit;
