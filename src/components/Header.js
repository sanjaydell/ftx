import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      Logo{" "}
      <div>
        <span>privacy</span>
        <span>FAQ</span>
        <span>Support</span>
        <span>Language</span>
        <span>My Account</span>
      </div>
    </div>
  );
}

export default Header;
