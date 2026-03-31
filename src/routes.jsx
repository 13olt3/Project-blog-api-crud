import App from "./App";

import Login from "./pages/login/login";
import Create from "./pages/create/create";
import Home from "./pages/home/home";
import Post from "./pages/posts/posts";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/posts/:id",
        element: <Post />,
      },
    ],
  },
];
export default routes;
