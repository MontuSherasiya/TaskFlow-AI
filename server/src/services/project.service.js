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

const getProjectById = async (projectId, ownerId) => {
    const project = await Project.findOne({
        _id: projectId,
        owner: ownerId
    });

    if(!project) {
        throw new Error('Project not found');
    }

    return {
        success: true,
        project,
    }
}

const updateProject = async (projectId, ownerId, projectData) => {
    const project = await Project.findOneAndUpdate({
        _id: projectId,
        owner: ownerId
    }, projectData, 
    { 
        new: true,
        runValidators: true
    });

    if(!project) {
        throw new Error('Project not found');
    }

    return {
        success: true,
        message: 'Project updated successfully',
        project,
    }
}

const deleteProject = async (projectId, ownerId) => {
    const project = await Project.findOneAndDelete({
        _id: projectId,
        owner: ownerId
    });

    if(!project){
        throw new Error('Project not found');
    }

    return{
        success: true,
        message: 'Project deleted successfully',
    }
}

export { createProject, getProjects, getProjectById, updateProject, deleteProject };