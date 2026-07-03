import Project from '../models/Project.js';

const createProject = async (projectData, ownerId) => {
    const project = await Project.create({
        ...projectData,
        owner: ownerId
    });

    return {
        success: true,
        message: 'Project created successfully',
        project,
    };
};

export {createProject};