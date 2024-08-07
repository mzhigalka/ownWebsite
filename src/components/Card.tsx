import { FC } from "react";
import { servicesData } from "../assets/constant/cards";
import { Link } from "react-router-dom";

const Card: FC = () => {
  return (
    <div>
      {servicesData.map((items) => (
        <div>
          <img src={items.image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Card;
