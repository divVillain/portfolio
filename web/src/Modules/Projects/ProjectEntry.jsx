export default function ProjectEntry({ project }) {
    return (
        <section className="w-full bg-white flex justify-center relative px-8 py-20">
            <div className="max-w-[1631px] w-full flex justify-between">
                <header className="flex flex-col max-w-[640px]">
                    <h1 className="text-[2.5rem] tracking-tight">Project Entry</h1>

                    <ul className="flex flex-wrap gap-4">
                        {project?.project_categories.map((category, index) => {
                            return (
                                <li className="flex gap-4" key={index} ><span className="shrink-0 w-auto">{category.name}</span> <span className="">{index != project.project_categories.length - 1 ? "|" : ""}</span></li>
                            )
                        })}
                    </ul>
                </header>
                <article>
                    <p className="max-w-[600px] text-[1.5rem] leading-[2rem]">
                        {project?.projectEntryDescription}
                    </p>
                </article>


            </div>
        </section>
    )
}