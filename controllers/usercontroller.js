const user = require("../models/User")



const insertUser = async (request,response)=>{
    try{
        const input = request.body
        const user = new User(input)
        await user.save()
        response.send("Registered Successfully")
    }
    catch(e)
    {
        response.status(500).send(message)
    }
}

module.exports = {insertUser}