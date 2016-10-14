/**
 * Created by Tabish Rizvi.
 * Github :  https://github.com/TabishRizvi
 * Email : sayyidtabish@gmail.com
 */

var router = require('righty').Router(),
    Joi = require("joi"),
    controllers = require("../controllers");

var routeMapping = [

    {
        path : "/login",
        method : "put",
        validate : {
            body : {
                email : Joi.string().email(),
                password : Joi.string().min(6)
            }
        },
        handler : controllers.user.UserLoginCtrl
    },

    {
        path : "/profile",
        method : "put",
        validate : {
            body : {
                city : Joi.string()
            },
            headers : {
                "X-Auth" : Joi.string()
            },
            files : {
                pic : {
                    mimetype : ["image/*"],
                    size : 50000
                }
            }
        },
        contentType : "multipart",
        handler : controllers.user.UserUpdateProfileCtrl
    },

    {
        path : "/profile",
        method : "get",
        validate : {
            headers : {
                "X-Auth" : Joi.string()
            }
        },
        handler : controllers.user.UserViewProfileCtrl
    },

    {
        path : "/logout",
        method : "put",
        validate : {
            headers : {
                "X-Auth" : Joi.string()
            }
        },
        handler : controllers.user.UserLogoutCtrl
    }
];



router.add(routeMapping);

module.exports = router;