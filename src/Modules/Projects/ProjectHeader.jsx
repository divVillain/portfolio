import PROJECTS from "../../PROJECTS.json";


export default function ProjectHeader({project}) {
    return (
        <header className="w-full h-[90vh] flex items-end p-8 relative">
            <img src={`/home/${PROJECTS[project].cover}`} className="w-full h-full object-cover absolute top-0 left-0" />
            <h1 className="text-white text-[5.625rem] tracking-tight relative z-10">Illustration</h1>
        </header>
    )
}
