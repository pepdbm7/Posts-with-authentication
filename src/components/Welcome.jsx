import React from "react";

const Welcome = () => {
  return (
    <div className="row " id="Body">
      <div className="medium-12 columns">
        <h2 id="welcomeText">PHP, MySQL and ReactJS Authentication App</h2>
        <a href="/login" className="button">
          Login
        </a>
        <a href="/signup" className="button success">
          Signup
        </a>
      </div>
    </div>
  );
};

export default Welcome;
