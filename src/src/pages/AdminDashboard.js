import React, { useState, useCallback } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FleetCard from "../components/FleetCard";

const AdminDashboard = () => {
  const [fleets, setFleets] = useState([]);

  const addFleet = (fleet) => {
    setFleets((prev) => [...prev, fleet]);
  };

  const updateDriver = useCallback((id, name) => {
    setFleets((prev) =>
      prev.map((f) => (f.id === id ? { ...f, driver: name } : f))
    );
  }, []);

  const toggleAvailability = useCallback((id) => {
    setFleets((prev) =>
      prev.map((f) =>
        f.id === id
          ? {
              ...f,
              availability:
                f.availability === "Available"
                  ? "Unavailable"
                  : "Available",
            }
          : f
      )
    );
  }, []);

  const deleteFleet = useCallback((id) => {
    if (window.confirm("Are you sure?")) {
      setFleets((prev) => prev.filter((f) => f.id !== id));
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", gap: "20px" }}>
        <Sidebar addFleet={addFleet} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
          {fleets.map((fleet) => (
            <FleetCard
              key={fleet.id}
              fleet={fleet}
              onUpdateDriver={updateDriver}
              onToggleAvailability={toggleAvailability}
              onDelete={deleteFleet}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
