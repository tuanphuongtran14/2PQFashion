const jwt = require('jsonwebtoken');
const User = require('../models').user;
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const { nanoid } = require('nanoid');
const saltRounds = Number(process.env.APP_SALT_ROUNDS) || 10;

exports.login = async (req, res) => {
    const authorizarion = req.body;

    const user = await User.findOne({ username: authorizarion.username}).lean();

    if(user) {
        const checkPw = await bcrypt.compare(authorizarion.password, user.password);
        
        if(checkPw) {
            if(user.confirmedToken)
                return res.status(403).json({
                    message: "Vui lòng xác nhận tài khoản của bạn trước khi đăng nhập!!!"
                })

            const data = {
                id_User: user.id_User,
                username: user.username,
                name: user.name,
                phone: user.phone, 
                email: user.email,
                address: user.address,
                isAdmin: user.isAdmin
            }

            const token = jwt.sign(data, process.env.APP_JWT_SECRET);
            return res.status(200).json({
                token
            });
        }
        else
            return res.status(401).json({
                message: "Mật khẩu bạn nhập không đúng"
            })
        
    } else
        return res.status(401).json({
            message: "Tên tài khoản không tồn tại"
        })
}

exports.resendConfirmedEmail = async (req, res) => {
    const authorizarion = req.body;

    const user = await User.findOne({ username: authorizarion.username}).lean();


    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '2pqfashion@gmail.com',
            pass: '#123456@'
        }
        });
    
        const mailOptions = {
        from: '2pqfashion@gmail.com',
        to: user.email,
        subject: '[2PQFashion Shop] Gửi lại - Xác nhận đăng ký tài khoản tại shop',
        html: `
            <h1>Xác nhận đăng ký tài khoản</h1>
            <p> Vui lòng xác nhận đăng ký tài khoản tại 2PQFashion Shop, bằng cách nhấn <a href="http://localhost:8080/confirm/${user.confirmedToken}">vào đây</a></p>
        `
    };
    
    transporter.sendMail(mailOptions);

    return res.send('Ok');
}

exports.forgetPassword = async (req, res) => {
    const email = req.body.email;

    const user = await User.findOne({ email: email});

    const newPw = nanoid(9);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '2pqfashion@gmail.com',
            pass: '#123456@'
        }
        });
    
        const mailOptions = {
        from: '2pqfashion@gmail.com',
        to: user.email,
        subject: `[2PQFashion Shop] Gửi lại mật khẩu mới cho tài khoản - ${user.username}`,
        html: `
            <h1>Gửi lại mật khẩu mới</h1>
            <p>Chào ${user.name},</p>
            <p>Đây là password mới của bạn: <b>${newPw}</b></p>
            <p>Đăng nhập ngay bằng cách nhấn <a href="http://localhost:3000/login">vào đây</a></p>
        `
    };
    
    transporter.sendMail(mailOptions);

    user.password = await bcrypt.hash(newPw, saltRounds);

    await user.save();

    return res.send('Ok');
}