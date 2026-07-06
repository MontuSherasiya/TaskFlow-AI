import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import Dashboard from '../pages/dashboard/Dashboard';

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {
                    <DashboardLayout>
                        <Dashboard />
                    </DashboardLayout>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;