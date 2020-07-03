import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} - MANROOP PARMAR</p>
    </footer>
  );
}

export default Footer;
