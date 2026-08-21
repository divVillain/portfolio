'use client';

export default function About() {

    const SKILLS = ["Artificial Intelligence", "Product Design", "Frontend Development", "UX Research", "Data Analysis"];

    return (
        <section id="about" className=" w-full relative">
            <figure className="fixed bottom-0 left-0 w-full flex px-20 justify-end z-[-50]">
                <img src="/home/portrait.png" className="brightness-[25%] h-[90vh]" />
            </figure>
            <section className="h-[100vh] w-full flex items-center justify-center z-50 relative">
                <article className="flex flex-col gap-10">
                    <p className="text-pretty text-[52px] text-white font-bold leading-[120%] max-w-[1100px]">
                        Hi! I'm Jaime, aProduct Designer with experience in the design of digital platforms and design systems

                    </p>
                    <span className="text-[#C9C9C9]">Currently working as Product Designer in <a href="https://www.prodigiosovolcan.com/" target="blank" className="font-bold text-white">Prodigioso Volcán</a></span>
                </article>
            </section>

            <section id="skill-container" className="h-[100vh]">
                <div className="flex flex-col p-40 gap-4 relative">
                    {SKILLS.map((skill, index) => (
                        <span key={index} className="skill py-2">{skill}</span>
                    ))}
                </div>
            </section>


        </section>
    )
}