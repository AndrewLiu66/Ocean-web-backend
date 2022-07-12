import { dashboardRoutes } from 'app/views/dashboard/DashboardRoutes'
import MatxLayout from '../components/MatxLayout/MatxLayout'
import { Navigate } from 'react-router-dom'

export const AllPages = () => {
    const all_routes = [
        {
            element: (
                <MatxLayout />
            ),
            children: [
                ...dashboardRoutes,
            ],
        },
        {
            path: '/',
            element: <Navigate to="dashboard/default" />,
        },
        {
            path: '/dashboard/default',
            element: <Navigate to="dashboard/default" />,
        }
    ]
    return all_routes
}
