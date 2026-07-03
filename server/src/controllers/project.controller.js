import { createProject,getProjects, getProjectById, updateProject, deleteProject } from '../services/project.service.js';

const create = async (req, res) => {
    try {
        const result = await createProject(req.body, req.user.id);

        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || 'An error occurred while creating the project',
        });
    };
};

const getAll = async (req, res) => {
    try{
        const result = await getProjects(req.user._id);

        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || 'An error occurred while fetching the projects',
        })
    }
}

const getById = async (req, res) => {
    try{
        const result = await getProjectById(req.params.id, req.user._id);

        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || 'An error occurred while fetching the project',
        })
    }
}

const update = async (req, res) => {
    try{
        const result = await updateProject(req.params.id, req.user._id, req.body);

        res.status(200).json(result);
    } catch(error) {
        res.status(400).json({
            success: false,
            message: error.message || 'An error occurred while updating the project',
        })
    }
}

const remove = async (req,res) => {
    try{
        const result = await deleteProject(req.params.id, req.user._id);

        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || 'An error occurred while deleting the project',
        })
    }
}

export { create, getAll, getById, update, remove };