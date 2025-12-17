import ProjectHeader from "./Modules/Projects/ProjectHeader.jsx";
import ProjectEntry from "./Modules/Projects/ProjectEntry.jsx";
import NextProject from "./Modules/Projects/NextProject.jsx";
import PROJECTS from "./PROJECTS.json";



import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProjectInfo } from "./lib/get-projects-info.js";
import { getProjectsInfo } from "./lib/get-projects-info.js";
import { PROJECT_BLOCK_COMPONENTS } from "./Modules/Projects/ProjectBlockMap.js";



export default function ProjectPage() {

    /*
    const [project, setProjects] = useState([]);
    const [projectContext, setProjectContext] = useState([]); */
    const pageId = useParams()

  /*  useEffect(() => {
        const fetchProject = async () => {
            setProjects(await getSingleProjectInfo(pageId.projectSlug));
            setProjectContext(await getProjectsInfo());
        }
        fetchProject();
    }, [pageId.projectSlug]); */

    const currentProject = PROJECTS.findIndex(project => project.slug === pageId.projectSlug);
    const nextProject = PROJECTS.findIndex(project => project.slug === pageId.projectSlug) + 1;


    return (
        <section className="mb-[-250px]">
            {PROJECTS[currentProject] ? <ProjectHeader project={PROJECTS[currentProject]} /> : null}
            <div id="project-body" className="flex flex-col gap-0 w-full bg-white z-50 relative">
                {PROJECTS[currentProject] ? <ProjectEntry project={PROJECTS[currentProject]} /> : null}

                <section className="py-20">
                    {PROJECTS[currentProject]?.sections?.map((section, index) => {
                        const Block = PROJECT_BLOCK_COMPONENTS[section.__component];

                        if (!Block) {
                            console.warn("Bloque no mapeado:", section.__component);
                            return null;
                        }

                        // Le pasamos los datos del bloque; puedes añadir también project si lo necesitas
                        return (
                            <Block
                                key={section.id ?? index}
                                block={section}
                                project={PROJECTS[currentProject]}
                                section={index}
                            />
                        );
                    })}
                </section>
                {nextProject >= PROJECTS.length ? <NextProject project={PROJECTS[0]} /> : <NextProject project={PROJECTS[nextProject]} />}
            </div>
        </section>
    )
}