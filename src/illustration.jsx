import ProjectHeader from "./Modules/Projects/ProjectHeader.jsx";
import ProjectEntry from "./Modules/Projects/ProjectEntry.jsx";


export default function Illustration() {
    return (
        <div>
            <ProjectHeader project={0} />
            <ProjectEntry/>
        </div>
    )
}