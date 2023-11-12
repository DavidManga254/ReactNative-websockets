import { createBrowserRouter } from "react-router-dom";
import { ChatPage } from "../pages/chatPage/chatPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <ChatPage />,
    children: [
      {
        path: "/",
      },
    ],
  },
]);
