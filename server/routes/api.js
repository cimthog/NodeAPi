const express = require('express')
router = express.Router()
control = require('../controller/user_controller')
var path = require('path');

router.get('/getUsers',control.getUsers);
router.get('/findUser',control.findUser)
router.put('/updateUser',control.updateUser)
router.post('/deleteUser',control.deleteUser)

router.get('/',(req,res)=>{
    res.sendFile('index.html', { root: path.join(__dirname, '../public') });
})

router.post('/addUser',control.addUser);

module.exports = router;