const jwt = require('jsonwebtoken')


const auth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(400).json({msg: 'No token provided'})
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if(err) return res.status(400).json({msg: "Invalid Authentication."})

      req.user = user
      next()
    })
  } catch (err) {
      return res.status(500).json({msg: err.message})
  }
}

const verifyTokenandAuth = (req, res, next) => {
  auth(req, res, () => {
    if(req.user.id === req.params.id || req.user.isAdmin) {
      next()
    }else {
      res.status(403).json({msg: 'You are not Allowed.'})
    }
  })
}

module.exports = { auth, verifyTokenandAuth };