export default function Footer() {
    return (
            <footer id="footer" className="w-full bg-white h-[70vh] flex items-end relative p-8 z-[-99] mt-[-500px]">
                <span className="text-[6rem] tracking-tight absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">Let's connect</span>
                <div className="flex justify-between w-full h-auto shrink-0 items-center">
                    <a href="">jaime01glez@gmail.com</a>
                    <div className="socials flex gap-4">
                        <a href="https://www.linkedin.com/in/jaimegonz%C3%A1lezsanchezoca%C3%B1a/" className="z-[99]">LinkedIn</a>
                        <a href="https://www.artstation.com/jaime01glez">Artstation</a>
                    </div>
                </div>
            </footer>
    )
}