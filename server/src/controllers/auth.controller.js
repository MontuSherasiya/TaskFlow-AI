import registerUser from "../services/auth.service.js"

const register = async (req,res) => {
    try{
        const result = await registerUser(req.body);
        res.status(201).json(result)
    } catch(err){
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
}

export default register