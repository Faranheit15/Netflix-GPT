import { RouterProvider } from "react-router-dom";
import appRouter from "../routes/index";

const Body = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
