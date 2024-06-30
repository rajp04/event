const jwt = require('jsonwebtoken')
const User = require('../model/userModel')


const verifyJWT = async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

        if (!token) {
            return res.json({
                success: false,
                message:  "Unauthorized request"
            })
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const user = await User.findById(decodedToken?._id);

        if (!user) {
            return res.json({
                success: false,
                message: "not found user"
            })
        }

        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            message: error.message
        })
    }
};


module.exports = verifyJWT;
