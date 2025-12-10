import { Link } from "react-router-dom";

export default function NextProject({ project }) {
    return (
        <>
            <section className="next-project w-full relative h-[75vh]">
                <figure className="h-[100vh]"
                style={{
                    backgroundImage: `url(${`http://localhost:1337${project?.cover?.url}`})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom center',
                    backgroundAttachment: 'fixed',
                }}>

                </figure>
                

                <article className="absolute top-[50%] left-0 translate-y-[-35%] flex justify-between items-center text-white w-full p-10">
                    <span className="text-[2.5rem]">Related project</span>
                    <Link to={`/${project?.slug}`} className="text-[5rem]  tracking-[-3px] text-center z-10">
                        {project?.title}
                    </Link>
                </article>
            </section>
        </>
    )
}