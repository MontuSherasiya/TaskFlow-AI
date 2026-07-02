import {registerUser, loginUser} from "../services/auth.service.js"

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

const login = async (req,res) => {
    try{
        const result = await loginUser(req.body);
        res.status(200).json(result)
    } catch (err){
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
}

export {register, login}