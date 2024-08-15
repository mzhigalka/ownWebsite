import { FC } from "react";
import loader from "../assets/images/loader.gif";

const LoadingScreen: FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="text-2xl">
        <img src={loader} alt="Loading..." />
      </div>
    </div>
  );
};

export default LoadingScreen;
