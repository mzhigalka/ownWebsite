import { FC } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { cardVariants } from "../assets/constant/animation";
import { useTranslatedServicesData } from "../assets/constant/cards";

const CardItem: FC<{ item: any }> = ({ item }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      className="work-item mb-[100px] text-center box-border inline-block w-[calc(50%-60px)]"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
    >
      <Link to={item.link}>
        <div className="work-item__image h-[640px] overflow-hidden rounded-3xl">
          <img
            className="block w-full h-full object-cover"
            src={item.image}
            alt={item.title}
          />
        </div>
        <div className="text-center mt-6 max-md:mt-3">
          <h3 className="text-black font-medium text-[22px] block leading-relaxed max-md:text-lg">
            {item.title}
          </h3>
          <p className="text-grey font-light text-lg max-md:text-base">
            {item.text}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

const Card: FC = () => {
  const translatedData = useTranslatedServicesData();

  return (
    <div className="flex flex-wrap justify-between max-w-[1200px] mx-auto">
      {translatedData.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Card;
