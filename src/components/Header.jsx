import React from "react";

const Header = props => {
  return (
    <div className="callout headcolor" id="Header">
      <div className="row column">
        <a href="/">
          <h1 id="">{props.name}</h1>
        </a>
      </div>
    </div>
  );
};

export default Header;
