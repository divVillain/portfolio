export default function Nav() {
    return (
        <nav className="fixed w-full flex items-center justify-between p-8 top-0 left-0 z-50">
            <div className="head-container flex items-center gap-4 text-white">
                <span className="text-[18px]"><a href="#">Jaime González</a></span>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="7.7836" height="7.7836" fill="white" />
                </svg>
                <span className="text-gray-500 text-[18px]">Product Designer</span>
                <span className="text-gray-500 text-[18px]">Frontend Developer</span>
                <span className="text-gray-500 text-[18px]">Illustrator</span>
            </div>
            <button><svg width="34" height="21" viewBox="0 0 34 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H25.5898V7.7836H0V0Z" fill="white" />
                <path d="M8.18518 12.4932H33.775V20.2768H8.18518V12.4932Z" fill="white" />
            </svg>
            </button>
        </nav>
    )
}