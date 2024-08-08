import { FC } from "react";
import { servicesData } from "../assets/constant/cards";
import { Link } from "react-router-dom";

const Card: FC = () => {
  return (
    <div className="slide delay02 flex flex-wrap justify-between max-w-[1200px] mx-auto">
      {servicesData.map((items) => (
        <Link
          key={items.id}
          to={items.link}
          className=" work-item mb-[100px] text-center box-border inline-block w-[calc(50%-60px)] even:relative even:top-[300px]"
        >
          <div className="work-item__image h-[640px] overflow-hidden rounded-3xl">
            <img
              className="block w-full h-full object-cover"
              src={items.image}
              alt=""
            />
          </div>
          <div className="text-center mt-6">
            <h3 className="text-black font-medium text-xl block leading-relaxed">
              {items.title}
            </h3>
            <p className="text-grey font-light text-lg">{items.text}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
