import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'

const Analytics2 = Loadable(lazy(() => import('./Analytics2')))

export const dashboardRoutes = [
    {
        path: 'dashboard/default',
        element: <Analytics2 />,
    },
]
