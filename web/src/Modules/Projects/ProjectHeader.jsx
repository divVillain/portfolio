import { Link } from "react-router-dom";
import ProjectEntry from "./ProjectEntry.jsx";
import PROJECTS from "../../data/PROJECTS.json";

export default function ProjectHeader({ project }) {
  return (
    <header className="w-full flex p-2 md:p-8 flex-col md:flex-row  gap-4 relative pt-40 md:h-[90vh] md:items-end justify-between">
      <img
        src={`${project?.cover?.url}`}
        className="w-full rounded-lg object-cover absolute top-0 left-0 z-0 h-full "
      />
      <div className="bg-gradient-to-t from-black to-transparent absolute top-0 left-0 w-full h-full z-0 opacity-50"></div>
      <h1 className="heading-xlarge text-primary tracking-tight leading-[100%] z-10">
        {project?.title}
      </h1>
      {project ? (
        <ProjectEntry project={project} id={"Overview"} />
      ) : null}
    </header>
  );
}
