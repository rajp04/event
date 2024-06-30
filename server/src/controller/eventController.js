const Event = require('../model/eventModel')


const NewEvent = async (req, res) => {
    try {
        const { title, desc, by, mobile, date, time, address } = req.body

        if (!title || !desc || !by || !mobile || !date || !time || !address) {
            return res.json({
                success: false,
                message: "all fields are required"
            })
        }

        const event = await Event.create({ title, desc, by, mobile, date, time, address });
        return res.json({
            success: true,
            message: "Event Create Successfully",
            event
        })
    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            message: error.message
        })
    }
}


const Events = async (req, res) => {
    try {
        const result = await Event.find()
        return res.json({
            success: true,
            message:"Get Event Successfully",
            result
        })
    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            message: error.message
        })   
    }
}

module.exports = {NewEvent, Events}