import ProjectHeader from "./Modules/Projects/ProjectHeader.jsx";
import ProjectEntry from "./Modules/Projects/ProjectEntry.jsx";
import NextProject from "./Modules/Projects/NextProject.jsx";



import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProjectInfo } from "./lib/get-projects-info.js";
import { PROJECT_BLOCK_COMPONENTS } from "./Modules/Projects/ProjectBlockMap.js";



export default function ProjectPage() {
    
    const [project, setProjects] = useState([]);
    const pageId  = useParams()

    useEffect(() => {
        const fetchProject = async () => {
            setProjects(await getSingleProjectInfo(pageId.projectSlug));
        }
        fetchProject();
    }, [pageId.projectSlug]);

    console.log(project[0]?.sections);


    return (
            <div>
                {project[0] ? <ProjectHeader project={project[0]} /> : null}
                {project[0] ? <ProjectEntry project={project[0]} /> : null}

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
                            gridSize={section.gridSize ? section.gridSize : null}
                        />
                    );
                })}

            </div>
    )
}