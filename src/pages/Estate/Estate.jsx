import React from "react";
import image from "../../assets/card_images/id-1.jpg";

const Estate = ({ estate }) => {
  console.log(estate);
  return (
    <div>
      <div className="text-black bg-gray-200 flex flex-col justify-between h-full max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full rounded" src={estate.image} />
        <div className="p-4">
          <p>{estate.location}</p>
          <h1 className="text-xl font-bold">{estate.estate_title}</h1>
          <p>{estate.description}</p>
          <p>{estate.price}</p>
          <p>
            {estate.facilities.map((facility, index) => (
              <span key={index}>{facility + ", "}</span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Estate;
