import { createTask } from "../services/task.service.js";

const create = async (req, res) => {
    try{
        const result = await createTask(req.body, req.user._id);

        res.status(201).json(result);
    } catch(error){
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

export {create};