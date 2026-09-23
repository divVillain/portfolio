import { Link } from "react-router-dom";

export default function NextProject({ project }) {
    return (
        <>
            <section className="next-project w-full relative h-[600px] md:h-[75vh]">
                <figure className="h-[100vh]"
                    style={{
                        backgroundImage: `${!project?.videoCover ? `url(${`${project?.cover?.url}`})` : null}`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'bottom center',
                        backgroundAttachment: 'fixed',
                    }}>
                    {project?.videoCover ?
                        <video
                            autoPlay
                            loop
                            muted
                            src={`${project?.cover?.url}`}
                        /> : null}
                </figure>


                <article className="absolute top-[50%] left-0 translate-y-[-35%] flex flex-col md:flex-row gap-20 justify-between items-center text-white w-full p-4 md:p-10">
                    <span className="text-[2rem] md:text-[2.5rem]">Related project</span>
                    <Link to={`/${project?.slug}`} className="text-[3rem] md:text-[5rem] tracking-[-1.75px] md:tracking-[-3px] text-center z-10">
                        {project?.title}
                    </Link>
                </article>
            </section>
        </>
    )
}