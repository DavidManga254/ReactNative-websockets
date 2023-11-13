import "./App.css";
import { routes } from "./router/router";
import { RouterProvider } from "react-router-dom";
import { MyProvider } from "./components/socketContextPRovider/socketContextProvider";
function App() {
  return (
    <MyProvider>
      <RouterProvider router={routes} />
    </MyProvider>
  );
}

export default App;
