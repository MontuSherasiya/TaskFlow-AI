import Project from '../models/Project.js'
import Task from '../models/Task.js'

const getDashboardSummary = async (userId) => {
    const totalProjects = await Project.countDocuments({
        owner: userId,
    });

    const totalTasks = await Task.countDocuments({
        createdBy: userId,
    });

    const completedTasks = await Task.countDocuments({
        createdBy: userId,
        status: 'Done'
    });

    const pendingTasks = await Task.countDocuments({
        createdBy: userId,
        status: {
            $ne: "Done",
        },
    });

    const overdueTasks = await Task.countDocuments({
        createdBy: userId,
        status: {
            $ne: 'Done',
        },
        dueDate: {
            $lt: new Date(),
        },
    });

    return{
        success: true,
        summary:{
            totalProjects,
            totalTasks,
            completedTasks,
            pendingTasks,
            overdueTasks
        }
    }
}

const getRecentTasks = async (userId) => {
    const tasks = await Task.find({
        createdBy: userId,
    })
        .populate("project", "name")
        .sort({createdAt: -1})
        .limit(5);

    return{
        success: true,
        count: tasks.length,
        tasks,
    }
}

export {getDashboardSummary, getRecentTasks}