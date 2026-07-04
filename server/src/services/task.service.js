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

    if (!projectExists) {
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

    return {
        success: true,
        message: "Task created Successfully",
        task
    }
}

const getTasks = async (userId, filters) => {
    const query = {
        createdBy: userId,
    };

    //filter by project
    if (filters.project) {
        query.project = filters.project
    }

    //filter by status
    if (filters.status) {
        query.status = filters.status;
    }

    //filter by priority
    if (filters.priority) {
        query.priority = filters.priority;
    }

    const tasks = await Task.find(query)
        .populate("project", "name")
        .populate("assignedTo", "fullName email")
        .sort({ createdAt: -1 });

    return {
        success: true,
        count: tasks.length,
        tasks,
    }
}

const getTaskById = async (taskId, userId) => {
    const task = await Task.findOne({
        _id: taskId,
        createdBy: userId
    })
        .populate("project", "name")
        .populate("assignedTo", "fullName email")

    if (!task) {
        throw new Error("Task not Found...")
    }

    return {
        success: true,
        task,
    }
}

const updateTask = async (taskId, userId, taskData) => {
    const task = await Task.findOneAndUpdate({
        _id: taskId,
        createdBy: userId
    }, taskData,
        {
            new: true,
            runValidators: true
        }
    );

    if(!task){
        throw new Error("Task not Found...")
    }

    return{
        success: true,
        message: "Task updated successfully",
        task,
    }
}

const deleteTask = async (taskId, userId) => {
    const task = await Task.findOneAndDelete({
        _id: taskId,
        createdBy: userId
    });

    if(!task){
        throw new Error("Task not Found...");
    }

    return{
        success: true,
        message: "Task deleted successfully"
    }
}

export { createTask, getTasks, getTaskById, updateTask, deleteTask }