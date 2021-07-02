const User = require('../models').user;

exports.confirm = async (req, res) => {
    const token = req.params.token;
    return await User.findOneAndUpdate({ confirmedToken: token }, { confirmedToken: '' });
}