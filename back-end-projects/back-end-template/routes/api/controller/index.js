var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config()

const posts = [
  {
    username: 'Kyle',
    title: 'Post 1'
  },
  {
    username: 'Jim',
    title: 'Post 2'
  }
]

/* GET home page. */
router.get('/', authenticateToken, (req, res) => {
  console.log(req.user)
  res.json(posts.filter(post => post.username === req.user.name));
});

router.post('/login', (req, res) => {
  const username = req.body.username
  console.log(username)
  const user =  { name: username }
  console.log(user)

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
  res.json({accessToken: accessToken})


})

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) {
    return res.sendStatus(401)
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      res.status(403)
    }
    req.user = user
    next()
  })

}

module.exports = router;
