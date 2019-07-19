import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary" id="footer">
      <div className="container text-center text-white">
        <p>
          Copyright 2019 ,{" "}
          <a
            className="text-white"
            target="_blank"
            href="https://pepdbm7.github.io/portfolio"
          >
            {" "}
            PepDev
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
