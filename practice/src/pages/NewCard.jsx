import React, { useState } from "react";
import "../pages/index.css";

const NewCard = () => {
  const [isHighlight, setIsHighlight] = useState(false);

  // handle click
  const handleClick = () => {
    setIsHighlight(!isHighlight); // true isHighlight
  };

  return (
    <section className={`card ${isHighlight ? "highlighted" : ""}`}>
      <h3>Card Title</h3>
      <p>kdsjbdajsndskcjacbksjcskjd cdskjcbsdkjcdbskj </p>

      <button onClick={handleClick}>Change Background</button>
    </section>
  );
};

export default NewCard;
