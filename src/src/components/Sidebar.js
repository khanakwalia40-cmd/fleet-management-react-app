import React, { useState } from "react";

const Sidebar = ({ addFleet }) => {
  const [regNo, setRegNo] = useState("");
  const [category, setCategory] = useState("");
  const [driver, setDriver] = useState("");
  const [availability, setAvailability] = useState("");

  const handleAdd = () => {
    if (!regNo || !category || !driver || !availability) {
      alert("All fields are required");
      return;
    }

    addFleet({
      id: Date.now(),
      regNo,
      category,
      driver,
      availability,
    });

    setRegNo("");
    setCategory("");
    setDriver("");
    setAvailability("");
  };

  return (
    <div>
      <h3>Add Fleet</h3>

      <input
        placeholder="Vehicle Reg No"
        value={regNo}
        onChange={(e) => setRegNo(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option>Auto</option>
        <option>Car</option>
        <option>Truck</option>
        <option>Bus</option>
      </select>

      <input
        placeholder="Driver Name"
        value={driver}
        onChange={(e) => setDriver(e.target.value)}
      />

      <select
        value={availability}
        onChange={(e) => setAvailability(e.target.value)}
      >
        <option value="">Select Availability</option>
        <option>Available</option>
        <option>Unavailable</option>
      </select>

      <button onClick={handleAdd}>Add Fleet</button>
    </div>
  );
};

export default Sidebar;
