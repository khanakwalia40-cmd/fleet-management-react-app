import React from "react";

const FleetCard = React.memo(
  ({ fleet, onUpdateDriver, onToggleAvailability, onDelete }) => {
    console.log("FleetCard rendered:", fleet.regNo);

    const updateDriver = () => {
      const name = prompt("Enter new driver name");
      if (name && name.trim()) {
        onUpdateDriver(fleet.id, name);
      }
    };

    return (
      <div style={{ border: "1px solid black", padding: "10px" }}>
        <img
          src="https://via.placeholder.com/150"
          alt="vehicle"
          width="100%"
        />
        <p>Reg No: {fleet.regNo}</p>
        <p>Category: {fleet.category}</p>
        <p>Driver: {fleet.driver}</p>
        <p>Status: {fleet.availability}</p>

        <button onClick={updateDriver}>Update Driver</button>
        <button onClick={() => onToggleAvailability(fleet.id)}>
          Toggle Availability
        </button>
        <button onClick={() => onDelete(fleet.id)}>Delete</button>
      </div>
    );
  }
);

export default FleetCard;
