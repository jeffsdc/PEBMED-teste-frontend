import { createBrowserRouter } from "react-router-dom";
import SuccessView from "./components/SuccessView";
import Default from "./layouts/Default";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sucesso",
        element: <SuccessView />,
      },
    ],
  },
]);
