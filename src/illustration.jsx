import ProjectHeader from "./Modules/Projects/ProjectHeader.jsx";
import ProjectEntry from "./Modules/Projects/ProjectEntry.jsx";
import ProjectsImages from "./Modules/Projects/ProjectsImages.jsx";
import ProjectContent from "./Modules/Projects/ProjectContent.jsx";


export default function Illustration() {
    return (
        <div>
            <ProjectHeader project={0} />
            <ProjectEntry/>
            <section className="flex flex-col gap-0 py-10 bg-white">
            <ProjectsImages grid={1}/>
            <ProjectsImages grid={2}/>
            <ProjectsImages grid={3}/>
            </section>
            <ProjectContent />
        </div>
    )
}