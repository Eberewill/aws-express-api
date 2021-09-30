const mongoose = require("mongoose");

const docSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slot: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Slot",
    },
    specialization: {
      type: String,
    },
    doctor_Number: Number,

  },

);

module.exports = mongoose.model("Doctor", docSchema);


