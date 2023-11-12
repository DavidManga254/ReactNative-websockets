import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
export function SideBar() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-row justify-end mb-3">
        <Button
          size="small"
          component="label"
          variant="contained"
          startIcon={<AddIcon />}
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
