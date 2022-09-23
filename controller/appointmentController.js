const UserAppointmentSchema = require('../model/userAppointmentSchema')
exports.ScheduleAppointment = async (req, res) => {
    try {
        console.log("Request coming : ", req.body);
        const { timeFrom, timeTo, userId } = req.body
        const obj = {
            timeFrom,
            timeTo,
            userId
        }
        const result = await UserAppointmentSchema.create(obj);
        res.json({
            status: true,
            data: result,
            message: "User Appointment Added Successfully....."
        })


    } catch (error) {
        res.json({
            status: false,
            data: [],
            message: error.message
        })



    }

}
