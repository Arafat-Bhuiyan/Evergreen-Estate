import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Login from "../pages/Login/Login";
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import UpdateProfile from "../pages/UpdateProfile/updateProfile";

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
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/update_profile',
                element: <UpdateProfile />
            }
        ]
    }
])

export default router;