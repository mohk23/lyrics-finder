import React from "react";
import spinner from "../layout/spinner.gif";

export default () => {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "100px", margin: "50px auto", display: "block" }}
      />
    </div>
  );
};
