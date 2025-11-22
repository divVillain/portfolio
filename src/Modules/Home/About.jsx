export default function About() {

    const SKILLS = ["Artificial Intelligence", "Product Design", "Frontend Development", "Branding", "Illustration"];

    return (
        <section id="skill-container" className="h-[100vh] w-full relative">
            <figure>
                <img src="/home/portrait.png" id="about" className="absolute bottom-0 right-20 brightness-[25%] h-[90vh]" />
            </figure>
            <div className="flex flex-col p-40 gap-4 relative">
                {SKILLS.map((skill, index) => (
                    <span key={index} className="skill">{skill}</span>
                ))}
            </div>

        </section>
    )
}