import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="nav-animation fixed w-full flex items-center justify-between p-4 md:py-8 md:px-10 top-0 left-0 z-[90] ">
            <div className="head-container flex items-center gap-4">
                <header className="flex flex-col">
                    <span className="text-[18px] difference text-gray-100"><Link to="/">Jaime González</Link></span>
                    <span className="text-[14px] text-[#C9C9C9]">Product Designer</span>
                </header>
            </div>

            <div className="flex p-1 bg-[rgb(255,255,255,0.2)] rounded-full absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] hidden">
                <a className="bg-[rgb(255,255,255,0.2)] px-4 py-2 text-white rounded-full text-16px">
                    Work
                </a>
                <a className="bg-[rgb(255,255,255,0)] px-4 py-2 text-white rounded-full text-16px">
                    About
                </a>
            </div>

        </nav>
    )
}