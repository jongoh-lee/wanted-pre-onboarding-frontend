import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import TodoList from "./screens/TodoList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "todo",
        element: <TodoList />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
