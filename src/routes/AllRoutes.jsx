import { createBrowserRouter } from "react-router-dom";
import App from './../App';
import Home from '../components/Home/Home';

const AllRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])

export default AllRoutes;