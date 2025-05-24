import { RouterProvider } from "react-router-dom";
import router from "@app/router";
import ThemeSync from "@features/settings/components/ThemeSync";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ThemeSync />
    </>
  );
}

export default App;
