const userServices = require('../services/user.services');
const jwt = require('jsonwebtoken');

exports.create = async (req, res) => {
    let userInput = req.body;
    console.log(userInput);
    //If userInput is null, return 400 Error
    if(!userInput) {
        return res.status(400).json({
            message: "Can'\t create an empty user"
        })
    }
        //Validate user input
        validateBill(userInput);

        //Create new user
        BillService.create(userInput)
        .then(()=>{
            return res.status(200).json({ message:'create successfully'});
        })
        . catch ((err)=> {
        return res.status(500).json({
            message: err.message || "Some errors occur while creating new user"
        })
    })
}
exports.getAll = (req, res) => {
        // Get all order from database
        BillService.findAll()
        .then((bill)=>{
            return res.status(200).json(bill);
        })
        .catch((err)=>{
        res.status(500).json({
            message:
              err.message || "Some error occurred while retrieving bill."
        });
    })
}

exports.getOne = async (req, res) => {
    let id = req.params.id;
    console.log(id);
    try {
        //Find user by ID
        let user = await userServices.findByID(id);
        
        // If exist user, return it
        if(user) {
            var newUser={
                id_User: user.id_User,
                username:user.username,
                phone:user.phone,
                address:user.address,
                email:user.email,
            }
            return res.status(200).json(newUser);
        }

        // If user is not exist, return 404 Error
        return res.status(404).json({
            message: "Not found this user"
        })
    } catch(err) {
        res.status(500).json({
            message:
              err.message || `Some error occurred while retrieving user with ID=${id}.`
        });
    }
}

exports.updateOne = async (req, res) => {
    let id = req.params.id;
    let updateContent = req.body;

    // If updated content is null, return 400 Error
    if (!updateContent) {
        return res.status(400).json({
          message: "Data to update can not be empty!"
        });
    }

    try {
        // Update user by ID
        let user = await userServices.updateByID(id, updateContent);
        
        // If exist user, update and return it
        if(user) {
            return res.status(200).json({ message: "user was updated successfully." });
        }

        // If user is not exist, return 404 Error
        return res.status(404).json({
            message: `Cannot update user with ID=${id}. Maybe user was not found!`
        })
    } catch(err) {
        res.status(500).json({
            message:
              err.message || `Some error occurred while retrieving user with ID=${id}.`
        });
    }
}
exports.deleteOne = async (req, res) => {
    let id = req.params.id;

    try {
        let user = await userServices.deleteByID(id);
        if(user) {
            res.status(200).json({
                message: "user was deleted successfully!"
            });
        } else {
            res.status(404).send({
                message: `Cannot delete user with id=${id}. Maybe user was not found!`
              });
        }
    } catch(err) {
        res.status(500).json({
            message:
              err.message || `Some error occurred while deleting user with id=${id}.`
        });
    }
}


//sự kiện khi người dùng hủy bill 
exports.cancelBill = async (req, res) => {
    let id_Bill = req.body.id_Bill;
    console.log(id_Bill);
    // Get all order from database
    BillService.cancelBill(  id_Bill )
    .then((bill)=>{
        return res.status(200).json(bill);
    })                                
    .catch((err)=>{
    res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving bill."
    });
})
}

exports.me = async (req, res) => {
    const authorizationHeader = req.headers['authorization'];
    let token = '';

    if(authorizationHeader)
        token = authorizationHeader.split(' ')[1];

    if(!token) res.sendStatus(401);

    jwt.verify(token, process.env.APP_JWT_SECRET, (err, data) => {
        if(err) res.sendStatus(403);

        return res.status(200).json({
            ...data
        })
    })
}