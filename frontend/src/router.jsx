import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SubmitClaim from "./pages/SubmitClaim";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TrackClaim from "./pages/TrackClaim";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/submit-claim",
    element: <SubmitClaim />,
  },

  {
    path: "/track-claim",
    element: <TrackClaim />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
