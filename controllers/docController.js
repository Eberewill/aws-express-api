const Doctor = require("../models/Doctor.js");
const Slot = require("../models/Slot.js");

const createDoctor = async (req, res) => {
    try {
        //get req body
        let newDoc = await Doctor.create(req.body)

        if (!newDoc) {
            res.status(500).json({ status: false, message: "doctor was not created successfully" })
        }

        res.status(200).json({ status: true, message: "success", data: newDoc })

    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, message: "server Error" });
    }
};


const getDoctors = async (req, res) => {
    try {
        //get req body
        let doctors = await Doctor.find().populate("slot")

        if (!doctors) {
            res.status(500).json({ status: false, message: "doctor was not found" })
        }

        res.status(200).json({ status: true, message: "success", data: doctors })


    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, message: "server Error" });
    }
};
const getDoctorById = async (req, res) => {
    try {
        //get req body
        let doctor = await Doctor.findById(req.params.id)
        let slot = await Slot.find({ doctor: doctor })

        console.log("Slot", slot)
        if (!doctor) {
            res.status(500).json({ status: false, message: "doctor was not found" })
        }

        res.status(200).json({
            status: true, message: "success", data: {
                "doctor-details": doctor, "slots-data": slot
            }
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, message: "server Error" });
    }
};
module.exports = { createDoctor, getDoctors, getDoctorById };
