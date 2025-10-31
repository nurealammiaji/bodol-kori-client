import App from './../App';
import { createBrowserRouter } from "react-router-dom";

const AllRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: []
    }
])

export default AllRoutes;