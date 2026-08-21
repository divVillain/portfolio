import { Link } from "react-router-dom";

export default function NextProject({ project }) {
    return (
        <>
            <section className="next-project w-full relative h-[75vh] mb-[-160px]">
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