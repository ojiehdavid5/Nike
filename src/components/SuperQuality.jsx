import React from "react";
import Button from "./Button";
import {shoe8} from '../assets/images'

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col ">
        <p className="text-xl font-montserrat text-orange-200">
          Our summer collections
        </p>

        <h2 className="mt-10 font-palanquin text-4xl capitalized  font-bold">
          We provide you
          <br />
          <span className=" text-orange-500 ">Super{""}</span>
          <span className=" text-orange-500 "> Quality{""}</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg ">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error
          amet consequuntur nisi consequatur architecto, delectus ea aliquam
          nobis velit!
        </p>
        <p className="mt-6 lg:max-w-lg  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          nostrum hic suscipit minus est ullam.
        </p>
        <div className="mt-12">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8}
        alt="shoe 8"
        width={570}
        height={522}
        className="object-contain"/>

      </div>
    </section>
  );
};

export default SuperQuality;
