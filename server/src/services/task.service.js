import Task from '../models/Task.js';
import Project from '../models/Project.js'

const createTask = async (taskData, userId) => {
    const {
        title,
        description,
        project,
        assignedTo,
        priority,
        dueDate
    } = taskData

    //check project exists or not
    const projectExists = await Project.findById(project);

    if(!projectExists){
        throw new Error("Project not Found...");
    }

    const task = await Task.create({
        title,
        description,
        project,
        assignedTo,
        priority,
        dueDate,
        createdBy: userId
    });

    return{
        success: true,
        message: "Task created Successfully",
        task
    }
}

export {createTask}