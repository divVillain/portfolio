export default function ProjectsImages({ grid = 1 }) {
    return (
        <>
            {grid === 1 ?
                <figure className="px-8 py-[4px] bg-white flex items-center justify-center w-full">
                    <img src="/home/bg-illustration.png" alt="" className="w-full aspect-[16/9] object-cover rounded-lg" />
                </figure>
                : null}
            {
                grid === 2 ?
                    <figure className="px-8 py-[4px] bg-white w-full grid grid-cols-12 grid-rows-1 gap-2 h-[540px]">
                        <img src="/home/bg-illustration.png" alt="" className="object-cover rounded-lg col-span-6 w-full row-span-1 h-full" />
                        <img src="/home/bg-illustration.png" alt="" className="object-cover rounded-lg col-span-6 w-full row-span-1 h-full" />
                    </figure>
                    : null
            }
            {
                grid === 3 ?
                    <figure className="px-8 py-[4px] bg-white w-full grid grid-cols-12 grid-rows-1 gap-2 h-[540px]">
                        <img src="/home/bg-illustration.png" alt="" className="object-cover rounded-lg col-span-4 w-full row-span-full h-full" />
                        <img src="/home/bg-illustration.png" alt="" className="object-cover rounded-lg col-span-4 w-full row-span-full h-full" />
                        <img src="/home/bg-illustration.png" alt="" className="object-cover rounded-lg col-span-4 w-full row-span-full h-full" />
                    </figure>
                    : null
            }
        </>

    )
}