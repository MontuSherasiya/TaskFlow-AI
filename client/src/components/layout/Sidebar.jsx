import {
    LayoutDashboard,
    FolderKanban,
    CheckSquare,
    CalendarDays,
    User,
    Settings,
    LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
    {
        title: "Dashboard",
        icon: LayoutDashboard,
        path: "/",
    },
    {
        title: "Projects",
        icon: FolderKanban,
        path: "/projects",
    },
    {
        title: "Tasks",
        icon: CheckSquare,
        path: "/tasks",
    },
    {
        title: "Calendar",
        icon: CalendarDays,
        path: "/calendar",
    },
    {
        title: "Profile",
        icon: User,
        path: "/profile",
    },
    {
        title: "Settings",
        icon: Settings,
        path: "/settings",
    },
];

const Sidebar = () => {
    return (
        <aside className="w-72 bg-white border-r border-gray-200 flex flex-col h-screen">

            {/* Logo */}
            <div className="h-20 flex items-center justify-center border-b">
                <h1 className="text-2xl font-bold text-blue-600">
                    TaskFlow AI
                </h1>
            </div>

            {/* Navigation */}
            <div className="flex-1 p-5">

                <p className="text-xs uppercase text-gray-400 mb-4">
                    Main Menu
                </p>

                <nav className="space-y-2">

                    {menuItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <NavLink
                                key={item.title}
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                  ${isActive
                                        ? "bg-blue-600 text-white shadow-lg"
                                        : "text-gray-600 hover:bg-gray-100"
                                    }`
                                }
                            >
                                <Icon size={20} />
                                <span className="font-medium">
                                    {item.title}
                                </span>
                            </NavLink>
                        );
                    })}

                </nav>
            </div>

            {/* User Section */}
            <div className="border-t p-5">

                <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                        M
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Montu
                        </h3>

                        <p className="text-sm text-gray-500">
                            Full Stack Developer
                        </p>
                    </div>
                </div>
                <button className="flex items-center justify-center gap-2 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl transition">

                    <LogOut size={18} />

                    Logout

                </button>
            </div>
        </aside>
    );
};

export default Sidebar;