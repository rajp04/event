const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            maxlength: [50, "Maximum Length is 50"],
        },
        email: {
            type: String,
            required: true,
            unique: true, 
            match: [/.+\@.+\..+/, 'Please fill a valid email address'], 
        },
        mobile: {
            type: String,
            required: true,
            validate: {
                validator: function(num) {
                    return /^\+\d{1,3} \d{5}-\d{5}$/.test(num);
                },
                message:`The mobile number must include the country code and be in the format +91 12345-67890.`
            },
        },
        companyName: {
            type: String,
            default: 'Demo',
            maxlength: [50, "Maximum Length is 50"],
        },
    },
    {
        timestamps: true
    }
);

userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    );
};

module.exports = mongoose.model('User', userSchema);
