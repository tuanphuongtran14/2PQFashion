const jwt = require('jsonwebtoken');
const User = require('../models').user;
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
    const authorizarion = req.body;

    const user = await User.findOne({ username: authorizarion.username});
    if(user) {
        const checkPw = await bcrypt.compare(authorizarion.password, user.password);
        
        if(checkPw) {
            const data = {
                id_User: user.id_User,
                usename: user.username,
                phone: user.phone,
                email: user.email,
                address: user.address,
                isAdmin: user.isAdmin
            }
            const token = jwt.sign(data, process.env.APP_JWT_SECRET);
            res.status(200).json({
                token
            });
        }
        else
            return res.status(401).json({
                message: "Wrong password"
            })
        
    } else
        return res.status(401).json({
            message: "Wrong username"
        })
}
