const mongoose = require('mongoose');

const appointmentModel = new mongoose.Schema({
    timeFrom: { type: Date, required: true },
    timeTo: { type: Date, required: true },
    userId: { type: String, required: true },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
}, { collection: "userappoitnment" });
module.exports = UserAppointmentSchema = mongoose.model("userappoitnment", appointmentModel);