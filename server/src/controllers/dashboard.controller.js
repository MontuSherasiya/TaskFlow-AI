import { getDashboardSummary, getRecentTasks, getTaskStatusAnalytics, getProjectProgress } from "../services/dashboard.service.js";

const summary = async (req, res) => {
    try{
        const result = await getDashboardSummary(req.user._id);

        res.status(200).json(result);
    } catch (error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

const recentTasks = async (req, res) => {
    try{
        const result = await getRecentTasks(req.user._id);

        res.status(200).json(result)
    } catch(error){
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

const taskStatus = async (req,res) => {
    try{
        const result = await getTaskStatusAnalytics(req.user._id);

        res.status(200).json(result)
    } catch(error){
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

const projectProgress = async (req,res) => {
    try{
        const result = await getProjectProgress(req.user._id);

        res.status(200).json(result)
    } catch (error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export {summary, recentTasks, taskStatus, projectProgress}