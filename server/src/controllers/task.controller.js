import { createTask, getTaskById, getTasks, updateTask, deleteTask } from "../services/task.service.js";

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

const getAll = async (req, res) => {
    try{
        const result = await getTasks(
            req.user._id,
            req.query
        );

        res.status(200).json(result);
    } catch (error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const getById = async (req, res) => {
    try{
        const result = await getTaskById(
            req.params.id,
            req.user._id
        )

        res.status(200).json(result)
    } catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const update = async (req, res) => {
    try{
        const result = await updateTask(
            req.params.id,
            req.user._id,
            req.body
        )

        res.status(200).json(result)
    } catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const remove = async (req, res) => {
    try{
        const result = await deleteTask(
            req.params.id,
            req.user._id
        )

        res.status(200).json(result)
    } catch(error){
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
}

export {create, getAll, getById, update, remove};