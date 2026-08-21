import { Link } from "react-router-dom";

export default function ProjectHeader({ project }) {
    return (
        <header className="w-full max-w-[800px] flex flex-col  gap-4 relative">


            <h1 className="display-decorative-large text-primary tracking-tight leading-[100%] ">{project?.title}</h1>
            <img
                src={`${project?.cover?.url}`}
                className="w-full rounded-lg h-[500px] object-cover"
            />
        </header>
    )
}
