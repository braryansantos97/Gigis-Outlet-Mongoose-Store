const React = require('react');
const DefaultLayout = require('./layouts/Default')

class Edit extends React.Component {
  render() {
    return (
    <DefaultLayout title="Edit Product">
      <form method="POST" action={`/products/${this.props.product._id}?_method=PUT`}>
      Name: <input type="text" name="name" defaultValue={this.props.product.name}/><br/>
      image: <input type="text" name="img" defaultValue={this.props.product.img}/><br/>
      Price: <input type="number" name="price" defaultValue={this.props.product.price}/><br/>
      quantity: <input type="number" name="qty" defaultValue={this.props.product.qty}/><br/>
      <input type="submit" name="" value="Save Changes"/>
      </form>
    </DefaultLayout>
    )
  }
}

module.exports = Edit;
