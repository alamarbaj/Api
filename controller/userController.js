

exports.Lists = async (req, res) => {
    try {
        const result = await UserSchema.find()
        res.json({
            status: true,
            data: result,
            message: "User List fetch successfully....."
        })

    } catch (error) {
        res.json({
            status: false,
            data: [],
            message: error.message
        })

    }
}

exports.addUser = async (req, res) => {
    try {
        console.log(req.body);
        const body = req.body
        const obj = {
            name: body.name,
            email: body.email,
            phone: body.phone,
            address: body.address
        }
        const result = await UserSchema.create(obj);
        res.json({
            status: true,
            data: result,
            message: "User Added Successfully....."
        })


    } catch (error) {
        res.json({
            status: false,
            data: [],
            message: error.message
        })



    }

}


exports.getById = async (req, res) => {
    try {
        const _id = req.params._id;
        const result = await UserSchema.findOne({ _id });

        res.json({
            status: true,
            data: result,
            message: "User fetch successfully....."
        })

    } catch (error) {
        res.json({
            status: false,
            data: [],
            message: error.message
        })

    }
}

exports.userUpdate = async (req, res) => {
    try {
        const _id = req.body._id
        const body = req.body
        const obj = {
            name: body.name,
            email: body.email,
            phone: body.phone,
            address: body.address
        }
        const result = await UserSchema.updateOne({ _id }, { $set: obj });
        res.json({
            status: true,
            data: result,
            message: "User Update SuccessFully....."
        })
    } catch (error) {
        res.json({
            status: false,
            data: [],
            message: error.message
        })
    }
}

exports.userDelete = async (req,res) => {
   try{
    const _id  = req.params._id
    const result = await UserSchema.remove({_id})

    res.json({
        status : true,
        data : result,
        message : "User Delete Successfully....."
    })

   }catch(error){

    res.json({
        status : false,
        data: [],
        message : error.message
    })

   }
}