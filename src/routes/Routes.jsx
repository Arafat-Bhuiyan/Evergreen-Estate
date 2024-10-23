import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Login from "../pages/Login/Login";
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,

            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])

export default router;