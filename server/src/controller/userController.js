const User = require('../model/userModel')

const Register = async (req, res) => {
    try {
        const { fullName, email, mobile, companyName } = req.body

        if (!fullName || !email || !mobile) {
            return res.json({
                success: false,
                message: "Name, email and mobile number are require"
            })
        }

        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.json({
                success: 0,
                message: "User already exists",
            });
        }

        const user = await User.create({ fullName, email,  mobile, companyName })

        return res.json({
            success: true,
            message: "User Register Successfully",
            user
        })
    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            message: error.message
        })
    }
}


const Login = async (req, res) => {
    try {
        const { email, otp } = req.body;

        if (!email) {
            return res.json({
                success: false,
                message: "Email is required"
            })
        }

        const user = await User.findOne({ email })
        
        if(!user){
            return res.json({
                success:false,
                message:"User not found"
            })
        }

        if (!(otp == 123456)) {
            return res.json({
                success: false,
                message: "Invalid otp"
            })
        }

        const accessToken = user.generateAccessToken();

        const options = {
            httpOnly: true,
            secure: true
        };

        const loggedInUser = await User.findById(user._id).select("-password -__v");

        return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .json({
                success:true,
                user: loggedInUser, accessToken,
                message: "User logged In Successfully"
            })


    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            message: error.message
        })
    }
}


const Logout = async (req, res) => {
    req.user.accessToken = null;
    await req.user.save();

    const options = {
        httpOnly: true,
        secure: true
    };

    return res.status(200).clearCookie("accessToken", options).json({ success:true, message:"User Logout"});
}


module.exports = { Register, Login, Logout }