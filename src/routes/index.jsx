import { createBrowserRouter } from "react-router-dom";

import Login from "@/components/Login/Login";
import Browse from "@/components/Browse/Browse";

const appRouter = createBrowserRouter([
  {
    path: "/Netflix-GPT/",
    element: <Login />,
  },
  {
    path: "/Netflix-GPT/browse",
    element: <Browse />,
  },
]);

export default appRouter;
