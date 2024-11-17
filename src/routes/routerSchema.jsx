import { Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout/MainLayout';
import Home from '../pages/Home/Home';
import Calculation from "../pages/Calculation/Calculation";
import CreateItem from "../pages/CreateItem/CreateItem";

export const routerSchema = [
    {
        path: `/`,
        exact: true,
        title: 'Main',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'calculation',
                element: <Calculation />,
                exact: true,
            },
            {
                path: 'create-item',
                element: <CreateItem />,
                exact: true,
            },
            {
                path: 'update-item',
                children: [
                    {
                        path: ':id',
                        element: <CreateItem />,
                    }
                ]
            },
        ],
    },
    {
        path: `/*`,
        element: <Navigate to={`/`} />,
    },
];
