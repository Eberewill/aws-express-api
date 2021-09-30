const mongoose = require("mongoose");

const slotSchema = mongoose.Schema(
    {
        date: {
            type: Number,
            required: true,
        },
        doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor",
        },
        slot_time: [
            {
                time: Number,
            }
        ]
    },

);
module.exports = mongoose.model("Slot", slotSchema);

