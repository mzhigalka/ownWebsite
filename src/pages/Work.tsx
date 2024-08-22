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
            <div className="text-xl text-semigrey font-light mb-10">
              <p>{project.description}</p>
            </div>
            <a
              className="font-normal text-black text-[22px] hover:underline"
              href={project.link}
              target="__blank"
            >
              {project.title} Website
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {project.images.map((img, index) => (
            <img key={index} src={img} alt={`${project.title} ${index + 1}`} />
          ))}
          <div className="video-desktop max-md:p-6 ">
            <div className="video-desktop__inner">
              <video preload="none" autoPlay loop muted playsInline>
                <source src={project.video} type="video/mp4" />
              </video>
            </div>
          </div>
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
