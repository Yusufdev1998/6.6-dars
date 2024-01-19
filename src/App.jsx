import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import PlanetPage from "./pages/PlanetPage";
import Root from "./pages/Root";
import { pages } from "./pages/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Navigate to={"/mercury"}></Navigate>,
      },
      ...pages.map(page => ({
        path: page.name.toLowerCase(),
        element: <PlanetPage data={page} />,
      })),
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
