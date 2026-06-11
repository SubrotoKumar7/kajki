import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../layout/Root";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>
            }
        ]
    }
]);

export default router;