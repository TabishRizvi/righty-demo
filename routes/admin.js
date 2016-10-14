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
        handler : controllers.admin.AdminLoginCtrl
    },

    {
        path : "/users",
        method : "get",
        validate : {
            headers : {
                "X-Auth" : Joi.string()
            },
            query : {
                id : Joi.string().optional()
            }
        },
        handler : controllers.admin.AdminListUsersCtrl
    },

    {
        path : "/logout",
        method : "put",
        validate : {
            headers : {
                "X-Auth" : Joi.string()
            }
        },
        handler : controllers.admin.AdminLogoutCtrl
    }
];



router.add(routeMapping);

module.exports = router;