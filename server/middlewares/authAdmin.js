const User = require('../models/UsersModel');


const authAdmin = async (req, res, next) => {
  try {
    const { id: userId } = req.user
    const user = await User.findById({_id: userId})

    if(user.isAdmin === false) {
      return res.status(500).json({msg: "Admin resource, access denied."})
    }else {
      next();
    }
  } catch (error) {
    return res.status(500).json({msg: error.message})
  }
}


module.exports = authAdmin 