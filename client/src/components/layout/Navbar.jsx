import {
    Bell,
    Search,
    Moon,
    ChevronDown,
} from "lucide-react";

const Navbar = () => {
    return (
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8">

            {/* Left */}
            <div className="flex items-center gap-4">

                <div className="relative">

                    <Search
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Search projects, tasks..."
                        className="w-80 pl-10 pr-4 py-2 rounded-xl border border-gray-300 outline-none focus:border-blue-500"
                    />

                </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-6">

                {/* Dark Mode Button */}
                <button className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition">
                    <Moon size={20} />
                </button>

                {/* Notification */}
                <button className="relative w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition">

                    <Bell size={20} />

                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* User Profile */}
                <div className="flex items-center gap-3 cursor-pointer">

                    <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                        M
                    </div>

                    <div className="hidden md:block">
                        <h3 className="font-semibold">
                            Montu
                        </h3>

                        <p className="text-sm text-gray-500">
                            Administrator
                        </p>
                    </div>

                    <ChevronDown size={18} />
                </div>
            </div>
        </header>
    );
};

export default Navbar;