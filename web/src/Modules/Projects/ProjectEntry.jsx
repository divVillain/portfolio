import PROJECTS from "../../PROJECTS.json";

export default function ProjectEntry({ project }) {
    return (
        <section className="w-full bg-white flex justify-center relative px-8 py-20">
            <div className="max-w-[1631px] w-full flex justify-between">
                <header className="flex flex-col max-w-[640px]">
                    <h1 className="text-[2.5rem] tracking-tight">Project Entry</h1>

                    <ul className="flex flex-wrap gap-4">
                        {PROJECTS[0].keys.map((key, index) => {
                            return (
                                <li className="flex gap-4" key={index} ><span className="shrink-0 w-auto">{key}</span> <span className="">{index != PROJECTS[0].keys.length - 1 ? "|" : ""}</span></li>
                            )
                        })}
                    </ul>
                </header>
                <article>
                    <p className="max-w-[600px] text-[1.5rem] leading-[2rem]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </article>
                    

            </div>
        </section>
    )
}