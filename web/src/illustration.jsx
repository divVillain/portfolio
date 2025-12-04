import ProjectHeader from "./Modules/Projects/ProjectHeader.jsx";
import ProjectEntry from "./Modules/Projects/ProjectEntry.jsx";
import ProjectsImages from "./Modules/Projects/ProjectsImages.jsx";
import ProjectContent from "./Modules/Projects/ProjectContent.jsx";
import NextProject from "./Modules/Projects/NextProject.jsx";


import { useEffect, useState } from "react";
import { getProjectsInfo } from "./lib/get-projects-info.js";



export default function Illustration({ projectId = 0 }) {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setProjects(await getProjectsInfo([]))
        }
        fetchData();
    });


    return (
        <div>
            {projects ? <ProjectHeader project={projects[projectId]} /> : null}
            {projects ? <ProjectEntry project={projects[projectId]} /> : null}
            <section className="flex flex-col gap-0 py-10 bg-white">
                <ProjectsImages grid={1} />
                <ProjectsImages grid={2} />
                <ProjectsImages grid={3} />
            </section>
            {projects ? <ProjectContent project={projects[projectId]} /> : null}
            {projectId != projects.length - 1 ? <NextProject project={projects[projectId + 1]} /> : <NextProject project={projects[0]} />}

        </div>
    )
}