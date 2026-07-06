import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />

            <div className="flex flex-col flex-1">
                <Navbar />

                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;