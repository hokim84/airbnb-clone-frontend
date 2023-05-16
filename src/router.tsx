import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./routes/Home";
import RoomDetail from "./routes/RoomDetail";
import NotFound from "./routes/NotFound";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                path:"",
                element: <Home />
            },
            {
                path:"rooms/:roomPk",
                element:<RoomDetail />,
            }
        ]
    }
]);

export default router;