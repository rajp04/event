const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxlength: [50, "Maximum Length is 50"],
        },
        desc: {
            type: String,
            required: true,
            maxlength: [250, "Maximum Length is 250"],
        },
        mobile: {
            type: Number,
            required: true,
            validate: {
                validator: function (num) {
                    return /\d{10}/.test(num);
                }
            },
        },
        by: {
            type: String,
            required: true,
        },
        date: {
            type: String
        },
        time: {
            type: String,
        },
        address: {
            type: String
        },
    },
    {
        timestamps: true
    }
);


module.exports = mongoose.model('Event', eventSchema);