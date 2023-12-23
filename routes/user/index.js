const express=require('express');
const router = express.Router();


// router.use('/',require('./user'));

router.use('/user', require('./users'));
router.use('/auth', require('./auth'));

module.exports=router;