import PROJECTS from "../../PROJECTS.json";

export default function ProjectEntry({ project }) {
    return (
        <section className="w-full bg-white flex justify-center relative px-8 py-20">
            <div className="max-w-[1631px] w-full grid grid-cols-12 justify-end gap-4">
                
                <article className="col-start-8 col-span-5 w-full">
                    <p className=" text-[1.5rem] leading-[2rem] w-full">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </article>
                    

            </div>
        </section>
    )
}