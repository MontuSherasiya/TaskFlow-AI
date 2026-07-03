import { createProject } from '../services/project.service.js';

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

export {create};