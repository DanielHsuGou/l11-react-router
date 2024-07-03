import { Link } from "react-router-dom";
import { useState } from "react";
import ContactDropMenu from "./ContactDropMenu";

export default function Header() {
  const [isDropMenuVisable, setDropMenuVisable] = useState(false);
  function handleMouseEnter() {
    setDropMenuVisable(true);
  }
  function handleMouseLeave() {
    setDropMenuVisable(false);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "40px",
        color: "white",
        height: "30px",
        backgroundColor: "black",
      }}
    >
      <div>
        <Link to="/" className="nav">
          Home
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          flex: "0 0 30%",
          justifyContent: "space-between",
        }}
      >
        <Link to="/about" className="nav">
          About
        </Link>
        <Link to="./blog" className="nav">
          Blog
        </Link>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Contact
          {isDropMenuVisable && <ContactDropMenu />}
        </div>
      </div>
    </div>
  );
}

// default reusable component for nav
