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

const getProjects = async (ownerId) => {
    const projects = await Project.find({ owner: ownerId }).sort({ createdAt: -1 });

    return{
        success: true,
        count: projects.length,
        projects,
    }
}

export { createProject, getProjects };