import { Link, useParams } from "react-router-dom";
import { projectsComponents } from "../assets/constant/projects";

const Work = () => {
  const { id } = useParams<{ id: string }>();

  const project = projectsComponents.find((project) => project.id === id);

  if (!project) {
    return (
      <h1 className="text-5xl font-semibold text-center my-36">
        Project not found
      </h1>
    );
  }

  return (
    <main>
      <section className="py-20 flex flex-col items-center">
        <div className="">
          <div className="max-w-[680px] mb-20">
            <h1 className="text-6xl font-semibold text-black">
              {project.title}
            </h1>
            <p className="mt-[60px] mb-[40px] text-black font-normal text-[24px]">
              {project.text}
            </p>
            <div className="text-xl text-semigrey font-light">
              <p>{project.description}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <img src={project.img} alt={project.title} />
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
