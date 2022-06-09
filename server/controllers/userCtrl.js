const User = require('../models/UsersModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const userCtrl = {
  registerUser: async (req, res) => {
    try {
      const {username, email, password} = req.body

      if(!username || !email || !password) {
        return res.status(400).json({msg: 'Please fill in all fields.'})
      }

      const user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({msg: 'This email already exists.'})
      }

      const hashPassword = await bcrypt.hash(password, 12);
      const newUser = { username, email, password: hashPassword };

      const token = jwt.sign(newUser, JWT_SECRET, { expiresIn: '7d' })
      const registerUser = await new User(newUser)
      registerUser.save()

      res.status(200).json({token, registerUser}) 
    } catch (error) {
      return res.status(500).json(error)
    }
  },
  loginUser: async (req, res) => {
    try {
      const { username, password } = req.body;
      if(!username || !password) {
        return res.status(401).json({msg: 'Please provide username and password'})
      }

      const logUser = await User.findOne({ username });
      if(!logUser) {
        return res.status(401).json({msg: 'No user with that username'})
      }

      const passcode = logUser.password
      const match = await bcrypt.compare(password, passcode)
      if(!match) {
        return res.status(401).json({msg: 'Wrong Password, try again.'})
      }

      const accessToken = jwt.sign({ id: logUser._id, isAdmin: logUser.isAdmin}, JWT_SECRET, { expiresIn: '7d' })

      const { password: Password, ...otherProps } = logUser._doc

      res.status(200).json({ accessToken, ...otherProps })
    } catch (error) {
      return res.status(500).json(error)
    }
  },
  getUser: async (req, res) => {
    try {
      // const { id: userId } = req.user
      const { id } = req.params

      const user = await User.findById(id)
      if (!user) {
        return res.status(400).json({msg:`No user with id ${id}`})
      }
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (error) {
      return res.status(500).json(error) 
    }
  },
  getUsers: async (req, res) => {
    try {
      const query = req.query.new
      const user = query ?  await User.find().sort({ _id: -1 }).limit(5) : await User.find();
      res.status(200).json(user)
    } catch (error) {
      return res.status(500).json(error) 
    }
  },
  updateUser: async (req, res) => {
    try {
      const { username, password, isAdmin, img, email } = req.body
      const { id } = req.params
      const hashPassword = await bcrypt.hash(password, 12)
  
      const updatedUser = await User.findByIdAndUpdate(id, 
        { username, password: hashPassword, isAdmin, img, email }, 
        { new: true, runValidators: true })
      res.json({updatedUser, msg: "Update Success!"})
    } catch (error) {
      return res.status(500).json(error) 
    }
  },
  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id)
      res.json({msg: "Deleted Success!"})
    } catch (error) {
      return res.status(500).json(error) 
    }
  },
  getStats: async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    try {
      // to group data
      const data = await User.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = userCtrl 