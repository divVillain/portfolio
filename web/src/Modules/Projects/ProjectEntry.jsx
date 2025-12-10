export default function ProjectEntry({ project, madeInProdigioso }) {
    return (
        <section className="w-full bg-white flex justify-center relative px-8 py-20">
            <div className="w-full grid grid-cols-12">
                <header className="flex flex-col col-start-1 col-span-5 gap-4">
                    <h1 className="text-[2.5rem] tracking-tight leading-[120%]">{project?.projectEntryName}</h1>

                    <ul className="flex flex-wrap gap-4 text-gray-500">
                        {project?.project_categories.map((category, index) => {
                            return (
                                <li
                                    className="flex gap-4"
                                    key={index} >
                                    <span className="shrink-0 w-auto">
                                        {category.name}
                                    </span>
                                    <span className="">
                                        {index != project.project_categories.length - 1 ? "|" : ""}
                                    </span>
                                </li>
                            )
                        })}
                    </ul>
                </header>
                <article className="col-start-8 col-span-5 flex gap-8 flex-col">
                    <p className="text-[1.5rem] leading-[2rem] text-gray-700">
                        {project?.projectEntryDescription}
                    </p>
                    {project.madeInProdigioso ? <p className="text-gray-500">Project made by <span className="text-gray-600 font-[700]">Prodigioso Volcán</span> </p> : null}
                </article>


            </div>
        </section>
    )
}