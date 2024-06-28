import { RouterProvider } from "react-router-dom";
import { router } from "./routes/root";

function App(): React.ReactNode {
  return <RouterProvider router={router} />;
}

export default App;
