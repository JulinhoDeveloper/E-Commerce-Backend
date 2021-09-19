const router = require("express").Router();

const auth  =  require('../controllers/auth');

//REGISTRO
router.post('/register', auth.registro);



module.exports = router;
