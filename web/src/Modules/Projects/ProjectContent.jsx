import PROJECTS from "../../PROJECTS.json";

export default function ProjectEntry({ project, section }) {
    return (
        <section className="w-full bg-white flex justify-center relative px-8 py-20">
            <div className="max-w-[1631px] w-full grid grid-cols-12 justify-end gap-4">
                
                <article className="col-start-8 col-span-5 w-full">
                    <p className=" text-[1.5rem] leading-[2rem] w-full">
                    {project?.sections[section].text != null ? project?.sections[section].text : null}
                    </p>
                </article>
                    

            </div>
        </section>
    )
}