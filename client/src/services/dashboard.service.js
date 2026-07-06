import api from '../api/axios.js';

//DAshboard summary
export const getDashboardSummary = async () => {
    const response = await api.get('/dashboard');
    return response.data;
}

//Recent Tasks
export const getRecentTasks = async () => {
    const response = await api.get('/dashboard/recent-tasks');
    return response.data;
}

//TAssk Status
export const getTaskStatus = async () => {
    const response = await api.get('/dashboard/task-status');
    return response.data;
}

//Project Progresss
export const getProjectProgress = async () => {
    const response = await api.get('/dashboard/project-progress');
    return response.data;
};