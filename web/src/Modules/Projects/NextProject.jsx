import {Link} from "react-router-dom";

export default function NextProject({ project }) {
    return (
        <>
        <section className="w-full h-[80vh] relative">
            <figure className="h-full relative z-1">
                <img src={`http://localhost:1337${project?.cover?.url}`} className="object-cover h-full w-full brightness-50 absolute z-0" alt="nexus" />
            </figure>
            <Link to={`/${project?.slug}`} className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-[92px] font-[700] tracking-[-3px] text-center z-10">
                {project?.title}
            </Link>
        </section>
        </>
    )
}