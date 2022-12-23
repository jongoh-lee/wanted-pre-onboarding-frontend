// import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import Todos from "./screens/Todos";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import HomeLayout from "./components/auth/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomeLayout />,
      },
      {
        path: "todos",
        element: (
          <ProtectedRoute>
            <Todos />
          </ProtectedRoute>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
