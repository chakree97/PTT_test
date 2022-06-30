const express = require('express');
const router = express.Router();
const seatController = require('../controller/seatcontroller') 
const userController = require('../controller/usercontroller') 
const adminController = require('../controller/admincontroller') 

seatController.setupseat();

/*----------------- Seat Manage ------------------------*/
router.get('/seat/getseat',seatController.getseat);
router.get('/seat/getseatdefault',seatController.getseatdefault);
router.patch('/seat/editseat/:count',seatController.editseat);//edit seat user
router.patch('/seat/setseat',seatController.setseat);
/*------------------------------------------------------*/

/*----------------- User Manage ------------------------*/
router.get('/user/getusercount',userController.getusercount);
router.get('/user/getuser',userController.getuser);
router.get('/user/getusersearchname/:name',userController.getusersearch);
router.get('/user/getusersort',userController.getusersort);
router.get('/user/getusersortreverse',userController.getusersortreverse);
router.post('/user/register',userController.registeruser);
/*------------------------------------------------------*/

/*----------------- Admin Manage ------------------------*/
router.get('/admin/getuser',adminController.getuser);
router.get('/admin/getusersearchname/:name',adminController.getusersearch);
router.get('/admin/getusersortname',adminController.getusersortname);
router.get('/admin/getusersortnamereverse',adminController.getusersortnamereverse);
router.get('/admin/getusersortseat',adminController.getusersortseat);
router.get('/admin/getusersortseatreverse',adminController.getusersortseatreverse);
/*------------------------------------------------------*/

module.exports = router;