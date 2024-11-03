import React from "react";
import { useLoaderData } from "react-router-dom";
import Estate from "../Estate/Estate";

const Estates = () => {
  const estates = useLoaderData();
  return (
    <div className="my-10 flex flex-col items-center justify-center">
      <div className="grid grid-cols-3 gap-10">
        {estates.map((estate, index) => (
          <Estate key={index} estate={estate} />
        ))}
      </div>
    </div>
  );
};

export default Estates;
