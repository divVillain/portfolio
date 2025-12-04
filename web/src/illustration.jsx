import ProjectHeader from "./Modules/Projects/ProjectHeader.jsx";
import ProjectEntry from "./Modules/Projects/ProjectEntry.jsx";
import ProjectsImages from "./Modules/Projects/ProjectsImages.jsx";
import ProjectContent from "./Modules/Projects/ProjectContent.jsx";
import NextProject from "./Modules/Projects/NextProject.jsx";


import { useEffect, useState } from "react";
import { getProjectsInfo } from "./lib/get-projects-info.js";
import { PROJECT_BLOCK_COMPONENTS } from "./Modules/Projects/ProjectBlockMap.js";



export default function Illustration({ projectId = 1 }) {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setProjects(await getProjectsInfo([]))
        }
        fetchData();
    }, []);


    return (
        <div>
            {projects ? <ProjectHeader project={projects[projectId]} /> : null}
            {projects ? <ProjectEntry project={projects[projectId]} /> : null}

            {projects[projectId]?.sections?.map((section, index) => {
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
                        project={projects[projectId]}
                        section={index}
                        gridSize={section.gridSize ? section.gridSize : null}
                    />
                );
            })}
            {projectId != projects.length - 1 ? <NextProject project={projects[projectId + 1]} /> : <NextProject project={projects[0]} />}

        </div>
    )
}