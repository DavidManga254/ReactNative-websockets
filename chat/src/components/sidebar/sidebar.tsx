import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import { CreareRoomForm } from "../createRoomForm/createRoomForm";
import { useLocation } from "react-router-dom";

export function SideBar() {
  const [showForm, setShowForm] = useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    setShowForm(false);
  }, [location.pathname]);
  return (
    <div className="w-full h-full">
      {showForm ? (
        <Backdrop open={showForm}>
          <div className="w-screen h-scren flex justify-center items-center">
            <CreareRoomForm />
          </div>
        </Backdrop>
      ) : null}
      <div className="flex flex-row justify-end mb-3">
        <Button
          size="small"
          component="label"
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setShowForm(true)}
        >
          Create Chat Room
        </Button>
      </div>
      <div>
        <div>
          <h2 className=" text-center">Active Rooms</h2>
        </div>
        <div>
          <div className="mb-2 border-b-2 border-gray-600">Room 1</div>
          <div className="mb-2 border-b-2 border-gray-600">Room 1</div>
          <div className="mb-2 border-b-2 border-gray-600">Room 1</div>
          <div className="mb-2 border-b-2 border-gray-600">Room 1</div>
        </div>
      </div>
    </div>
  );
}
