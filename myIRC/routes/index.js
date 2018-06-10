let express = require('express');
let router = express.Router();

// let server = Server(app);
// let sio = require("socket.io")(server);
//
// let sessionMiddleware = session({
//     store: new RedisStore({}), // XXX redis server config
//     secret: "keyboard cat",
// });

// sio.use(function(socket, next) {
//     sessionMiddleware(socket.request, socket.request.res, next);
// });

/* GET home page. */
router.get('/', (req, res, next) => {

    let logged = (req.session.user_id != null);
    res.render('index', { title: 'Express', session: logged});

});

module.exports = router;
