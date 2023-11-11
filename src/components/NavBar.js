import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
    <a key={links.index} href="#home">{"home"}</a>
    <a key={links.index} href="#about">{"about"}</a>
    <a key={links.index} href="#projects">{"projects"}</a>

  </nav>
  )
  
  
}

export default NavBar;
