export default function ProjectEntry({ project }) {
    return (
        <section className="w-full bg-white flex justify-center relative px-8 py-20">
            <div className="w-full grid grid-cols-12">
                <header className="flex flex-col col-start-1 col-span-5">
                    <h1 className="text-[2.5rem] tracking-tight">Project Entry</h1>

                    <ul className="flex flex-wrap gap-4">
                        {project?.project_categories.map((category, index) => {
                            return (
                                <li className="flex gap-4" key={index} ><span className="shrink-0 w-auto">{category.name}</span> <span className="">{index != project.project_categories.length - 1 ? "|" : ""}</span></li>
                            )
                        })}
                    </ul>
                </header>
                <article className="col-start-8 col-span-5">
                    <p className="text-[1.5rem] leading-[2rem]">
                        {project?.projectEntryDescription}
                    </p>
                </article>


            </div>
        </section>
    )
}