import React from "react";

const MobileHeader = props => {
  const showSidebar = () => {
    console.log("Hi");
  };

  return (
    <div className="title">
      <div className="">
        <button
          className=""
          type="button"
          data-open="my-info"
          onClick={showSidebar}
        />
        <span className="">{props.name} </span>
      </div>
    </div>
  );
};

export default MobileHeader;
