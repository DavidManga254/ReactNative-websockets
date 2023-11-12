import { SideBar } from "../../components/sidebar/sidebar";
import { Outlet } from "react-router-dom";

export function ChatPage() {
  return (
    <div className=" min-w-[100vw] min-h-[100vh] max-w-[100vw] p-1">
      <div className="w-[20%] border-r-2 p-2 border-black min-h-[98vh]">
        <SideBar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
