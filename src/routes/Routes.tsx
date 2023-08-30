import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import Library from "./Library";
import Study from "./Study";
import SearchResults from "./SearchResults";
import Create from "./Create";
import Edit from "./Edit";
import NotFound from "./404";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/Login", element: <Login /> },
      { path: "/Signup", element: <Signup /> },
      { path: "/Profile", element: <Profile /> },
      { path: "/Library", element: <Library /> },
      { path: "/Study/:id", element: <Study /> },
      { path: "/Results/:search", element: <SearchResults /> },
      { path: "/Create", element: <Create /> },
      { path: "/Edit/:id", element: <Edit /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
