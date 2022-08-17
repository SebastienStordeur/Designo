import React from "react";
import Line from "./Line";

const MobileMenu = () => {
  return (
    <button className="cursor-pointer">
      <Line />
      <Line className="my-1" />
      <Line />
    </button>
  );
};

export default MobileMenu;
