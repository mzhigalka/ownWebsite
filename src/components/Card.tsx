import React, { FC } from "react";

import { useTranslatedServicesData } from "../assets/constant/cards";
import { CardsTypes } from "../assets/constant/cards";
import { Link } from "react-router-dom";

const Card: FC = () => {
  const [cards, setCards] = React.useState<CardsTypes[]>([]);
  const translatedData = useTranslatedServicesData();

  React.useEffect(() => {
    setCards(translatedData);
  }, [translatedData]);

  return (
    <div className="slide delay02 flex flex-wrap justify-between max-w-[1200px] mx-auto">
      {cards.map((items) => (
        <Link
          key={items.id}
          to={items.link}
          className="work-item mb-[100px] text-center box-border inline-block w-[calc(50%-60px)]"
        >
          <div className="work-item__image h-[640px] overflow-hidden rounded-3xl">
            <img
              className="block w-full h-full object-cover"
              src={items.image}
              alt={items.title}
            />
          </div>
          <div className="text-center mt-6 max-md:mt-3">
            <h3 className="text-black font-medium text-[22px] block leading-relaxed max-md:text-lg">
              {items.title}
            </h3>
            <p className="text-grey font-light text-lg max-md:text-base">
              {items.text}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
