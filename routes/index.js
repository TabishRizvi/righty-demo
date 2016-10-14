/**
 * Created by Tabish Rizvi.
 * Github :  https://github.com/TabishRizvi
 * Email : sayyidtabish@gmail.com
 */


var router = require('righty').Router();

var adminSubRouter = require('./admin');
var userSubRouter = require('./user');

router.add('/admin', adminSubRouter);
router.add('/user', userSubRouter);


module.exports = router;