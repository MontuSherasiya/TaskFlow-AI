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

const getTaskStatusAnalytics = async (userId) => {
    const todo = await Task.countDocuments({
        createdBy: userId,
        status: 'Todo',
    });

    const inProgress = await Task.countDocuments({
        createdBy: userId,
        status: 'In Progress',
    });

    const review = await Task.countDocuments({
        createdBy: userId,
        status: 'Review',
    });

    const done = await Task.countDocuments({
        createdBy: userId,
        status: 'Done'
    });

    return{
        success: true,
        analytics: {
            todo,
            inProgress,
            review,
            done,
        },
    };
}

const getProjectProgress = async(userId) => {
    const projects = await Project.find({
        owner: userId,
    });

    const progress = [];

    for(const project of projects) {
        const totalTasks = await Task.countDocuments({
            project: project._id,
        });

        const completedTasks = await Task.countDocuments({
            project: project._id,
            status: 'Done'
        });

        const completion = 
            totalTasks === 0
                ? 0
                : Math.round((completedTasks/ totalTasks) * 100);
        
        progress.push({
            projectId: project._id,
            projectName: project.name,
            totalTasks,
            completedTasks,
            completion
        });
    };

    return{
        success: true,
        progress,
    }
}

export {getDashboardSummary, getRecentTasks, getTaskStatusAnalytics, getProjectProgress}