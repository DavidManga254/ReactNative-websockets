import { createBrowserRouter } from "react-router-dom";
import { ChatPage } from "../pages/chatPage/chatPage";
import { ChatDetailsPage } from "../pages/chatDetailsPage/chatDetailsPage";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <ChatPage />,
    children: [
      {
        path: "chat/:room",
        element: <ChatDetailsPage />,
      },
    ],
  },
]);
