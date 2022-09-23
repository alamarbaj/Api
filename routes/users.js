var express = require('express');
var router = express.Router();
var {Lists,addUser,getById,userUpdate,userDelete} = require('../controller/userController')

/* GET users listing. */
router.get('/list', Lists)
router.post('/addUser',addUser)
router.get('/getById/:_id',getById)
router.post('/userUpdate',userUpdate)
router.get('/userDelete/:_id',userDelete)

module.exports = router;
