import React, { useState } from "react";
import "./App.css"; // Import CSS file for styling
import { motion } from "framer-motion";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  return (
    <div className="navbar">
      <button onClick={handleClick}>Toggle Transition</button>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring" }}
        className={`dropdown ${isOpen ? "open" : ""}`}
      >
        <img
          style={{ background: "black" }}
          src="https://assets.website-files.com/6102ca7c242024349fd95a21/6102ca7c2420244e8dd95a37_logo.svg"
        />
      </motion.div>
    </div>
  );
};

export default App;
