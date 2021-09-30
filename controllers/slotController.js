
const Slot = require("../models/Slot.js");

const addSlot = async (req, res) => {
    try {
        //get req body
        let newSlot = await Slot.create(req.body)

        if (!newSlot) {
            res.status(500).json({ status: false, message: "slot was not created successfully" })
        }

        res.status(200).json({ status: true, message: "success", data: newSlot })

    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, message: "server Error" });
    }
};


const getSlots = async (req, res) => {
    try {
        //get req body
        let slots = await Slot.find().populate("doctor")

        if (!slots) {
            res.status(500).json({ status: false, message: "slots was not found" })
        }

        res.status(200).json({ status: true, message: "success", data: slots })


    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, message: "server Error" });
    }
};
module.exports = { addSlot, getSlots };
