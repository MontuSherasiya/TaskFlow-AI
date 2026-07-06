import { useEffect, useState } from "react";
import { getDashboardSummary } from "../../services/dashboard.service.js";
import StatsCard from "../../components/dashboard/StatusCard.jsx";

const Dashboard = () => {

    const [summary, setSummary] = useState(null);

    useEffect(() => {
        loadDashboard();
    }, [])

    const loadDashboard = async () => {
        try {
            const data = await getDashboardSummary();
            setSummary(data);
        } catch (error) {
            console.error(error)
        }
    };

    if (!summary) {
        return (
            <div className="text-center mt-20 text-xl">
                Loading Dashboard...
            </div>
        )
    }

    return (
        <div>
            <h1 className="text-4xl font-bold">
                Dashboard
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <StatsCard
                    title="Projects"
                    value={summary.totalProjects}
                    color="#3B82F6"
                />

                <StatsCard
                    title="Tasks"
                    value={summary.totalTasks}
                    color="#10B981"
                />

                <StatsCard
                    title="Completed"
                    value={summary.completedTasks}
                    color="#F59E0B"
                />

                <StatsCard
                    title="Pending"
                    value={summary.pendingTasks}
                    color="#EF4444"
                />

            </div>
        </div>
    );
};

export default Dashboard;