import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="nav-animation fixed w-full flex items-center justify-between py-8 top-0 left-0 z-[90]">
            <div className="head-container flex items-center gap-4">
                <span className="text-[18px] difference text-gray-300"><Link to="/">Jaime González</Link></span>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="7.7836" height="7.7836" fill="white" />
                </svg>
                <span className="text-gray-500 text-[18px]">Product Designer</span>
                <span className="text-gray-500 text-[18px]">Frontend Developer</span>
                <span className="text-gray-500 text-[18px]">Illustrator</span>
            </div>

        </nav>
    )
}