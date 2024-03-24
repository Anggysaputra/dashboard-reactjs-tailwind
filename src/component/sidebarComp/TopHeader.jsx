import React from "react";
import vads from "../../asset/vads.png";

export default function TopHeader() {
  return (
    <>
      <div className="group block flex-shrink-0  bg-red-500">
        <div className="flex flex-shrink-0 items-center px-4 p-4">
          <img
            className="h-15 w-24"
            src={vads}
            alt="Your Company"
          />
        </div>
        {/* <div className="border-b-4 border-orange-600"></div> */}
      </div>
    </>
  );
}
