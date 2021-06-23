const User = require('../models').user;
const bcrypt = require('bcrypt');
const saltRounds = Number(process.env.APP_SALT_ROUNDS) || 10;

exports.register = async (req, res) => {
    const input = req.body;
    
    if(!input) 
        return res.sendStatus(400);

    const checkUsername = await User.findOne({username: input.username});
    const checkEmail = await User.findOne({email: input.email});
    const checkPhoneNumber = await User.findOne({phone: input.phone});
    
    if(checkUsername)
        return res.status(400).json({
            message: "Existed username"
        })

    if(checkEmail)
        return res.status(400).json({
            message: "Existed email"
        })

    if(checkPhoneNumber)
        return res.status(400).json({
            message: "Existed phone number"
        })

    input.password = await bcrypt.hash(input.password, saltRounds);

    const newUser = new User({
        ...input,
        isAdmin: false
    });
    newUser.id_User = newUser._id;

    await newUser.save();
    return res.sendStatus(200);
}