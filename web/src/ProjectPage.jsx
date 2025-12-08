import ProjectHeader from "./Modules/Projects/ProjectHeader.jsx";
import ProjectEntry from "./Modules/Projects/ProjectEntry.jsx";
import NextProject from "./Modules/Projects/NextProject.jsx";



import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProjectInfo } from "./lib/get-projects-info.js";
import { getProjectsInfo } from "./lib/get-projects-info.js";
import { PROJECT_BLOCK_COMPONENTS } from "./Modules/Projects/ProjectBlockMap.js";



export default function ProjectPage() {

    const [project, setProjects] = useState([]);
    const [projectContext, setProjectContext] = useState([]);
    const pageId = useParams()

    useEffect(() => {
        const fetchProject = async () => {
            setProjects(await getSingleProjectInfo(pageId.projectSlug));
            setProjectContext(await getProjectsInfo());
        }
        fetchProject();
    }, [pageId.projectSlug]);

    const nextProject = projectContext.findIndex(project => project.slug === pageId.projectSlug) + 1;


    return (
        <section className="mb-[-250px]">
            {project[0] ? <ProjectHeader project={project[0]} /> : null}
            <div id="project-body" className="flex flex-col gap-0 w-full bg-white z-50 relative">
                {project[0] ? <ProjectEntry project={project[0]} /> : null}

                <section className="py-20">
                    {project[0]?.sections?.map((section, index) => {
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
                                project={project[0]}
                                section={index}
                            />
                        );
                    })}
                </section>
                {nextProject >= projectContext.length ? <NextProject project={projectContext[0]} /> : <NextProject project={projectContext[nextProject]} />}
            </div>
        </section>
    )
}