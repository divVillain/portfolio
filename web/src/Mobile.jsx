export default function Mobile() {
    return (
        <section
            className="w-full min-h-[100vh] flex flex-col items-center justify-center gap-8 h-full bg-[#161616] p-4"
        >
            <img src="http://localhost:1337/uploads/democrata_1_418c2c04f7.webp" className="h-full w-full absolute top-0 left-0 object-cover opacity-5 grayscale" />
            <svg width="64" height="64" viewBox="0 0 122 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.7476 77.4956H83.0308M44.283 44.2832H44.3383M77.4954 44.2832H77.5507M116.243 60.8894C116.243 91.4606 91.4603 116.243 60.8892 116.243C30.318 116.243 5.53516 91.4606 5.53516 60.8894C5.53516 30.3182 30.318 5.5354 60.8892 5.5354C91.4603 5.5354 116.243 30.3182 116.243 60.8894Z"
                    stroke="#CFCFCF"
                    stroke-width="8"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
            <div className="head-container flex items-center gap-4 absolute top-4 left-4 w-full">
                <span className="text-[18px] difference text-gray-300">Jaime González</span>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="7.7836" height="7.7836" fill="white" />
                </svg>
                <span className="text-gray-500 text-[18px]">Product Designer</span>
            </div>            <header className="flex flex-col gap-2">
                <h1 className="text-white text-[36px] font-bold text-center leading-[110%]">This is embarrassing...</h1>
                <p className="text-center text-[24px] text-gray-300">Unfortunately, this page is not available on mobile devices yet.</p>
            </header>
            <p className="text-center text-[18px] text-gray-400 ">But fear not since you can still enjoy the full experience on desktop!</p>
        </section>
    )
}