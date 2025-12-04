export default function ProjectHeader({project}) {
    return (
        <header className="w-full h-[90vh] flex items-end p-8 relative">
            {project != {} ? <img src={`http://localhost:1337${project?.cover?.url}`} className="w-full h-full object-cover absolute top-0 left-0 z-0" /> : null}        
            <h1 className="text-white text-[5.625rem] tracking-tight relative z-10">{project?.title}</h1>
        </header>
    )
}
