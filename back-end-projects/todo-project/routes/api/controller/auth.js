var express = require('express')
var router = express.Router()

router.post('/register', (req, res) => {
    console.log("inside /register")
    
    console.log(req.body.username)

    res.sendStatus(200)
})
module.exports = router