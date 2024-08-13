import React from "react";
import { Link, useParams } from "react-router-dom";

import { workComponents } from "../assets/constant/workComponents";

const Work = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <main>
      <section className="py-20 flex flex-col">
        <div>
          {workComponents
            .filter((item) => item.id === id)
            .map((item) => (
              <div key={item.id}>{item.component}</div>
            ))}
        </div>
        <div className="text-center pt-20">
          <Link
            to="/"
            className="text-[35px] font-semibold text-black hover:underline"
          >
            Back to all project
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Work;
