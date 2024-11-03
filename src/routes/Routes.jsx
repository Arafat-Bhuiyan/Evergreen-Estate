import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Login from "../pages/Login/Login";
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import UpdateProfile from "../pages/UpdateProfile/updateProfile";
import Estates from '../pages/Estates/Estates';

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('../estates.json')

            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/update_profile',
                element: <UpdateProfile />
            },
            {
                path: '/estates',
                element: <Estates />,
                loader: () => fetch('../estates.json')
            }
        ]
    }
])

export default router;