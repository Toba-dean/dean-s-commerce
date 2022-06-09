const Cart = require('../models/cartModel');

const cartCtrl = {
  createCart: async (req, res) => {
    const newCart = new Cart(req.body);
    try {
      const savedCart = await newCart.save();
      res.status(200).json(savedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getUserCart: async (req, res) => {
    try {
      const { userId } = req.params
      const cart = await Cart.findById(userId);
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getAllCarts: async (req, res) => {
    try {
      const cart = await Cart.find();  
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  updateCart: async (req, res) => {
    try {
      const updatedCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true, runValidators: true }
      );
      res.status(200).json(updatedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteCart: async (req, res) => {
    try {
      await Cart.findByIdAndDelete(req.params.id);
      res.status(200).json("Cart has been deleted.");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = cartCtrl