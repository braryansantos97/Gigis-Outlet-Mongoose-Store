const Product = require('../models/products')

const dataController = {
  index(req, res, next){
      Product.find({}, (err, theProducts) => {
        if(err){
          res.status(404).send({
            msg: err.message
          })
        } else {
          res.locals.data.products = theProducts
          next()
        }
      })
  },
  show(req, res, next){
    Product.findById(req.params.id, (err, editedProduct) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = editedProduct;
        next();
      }
    })
  },
  create(req, res, next){
    Product.create(req.body, (err, createdProduct) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = createdProduct;
        next();
      }
    })
  },
  destroy(req, res, next){
    Product.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = deletedProduct;
        next();
      }
    })
  },
  update(req, res, next){
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedProduct) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = updatedProduct;
        next();
      }
    })
  },
  buy(req, res, next){
    Product.findByIdAndUpdate(req.params.id, { $inc: {"qty": -1 } }, {new: true }, (err, response) => {
      if(err){
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = response;
        next();
      }
    })
  }
}
module.exports = dataController;
