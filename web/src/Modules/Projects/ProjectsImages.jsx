export default function ProjectsImages({ project, section }) {
    return (
        <>
            {
                project?.sections[section]?.images.length === 1 ?
                    <figure className="px-8 py-[4px] bg-white flex items-center justify-center w-full">
                        <img src={`http://localhost:1337${project?.sections[section]?.images[0].url}`} alt="" className="w-full aspect-[16/9] object-cover rounded-lg" />
                    </figure>
                    : null}
            {
                project?.sections[section]?.images.length === 2 ? 
                    <figure className="px-8 py-[4px] bg-white w-full grid grid-cols-12 grid-rows-1 gap-2 h-[540px]">
                        {project?.sections[section]?.images?.map((image, index) => {
                            return <img key={index} src={`http://localhost:1337${image.url}`} alt="" className="object-cover rounded-lg col-span-6 w-full row-span-full h-full" />
                        })}
                    </figure>
                    : null
            }
            {
                project?.sections[section]?.images.length === 3 ? 
                    <figure className="px-8 py-[4px] bg-white w-full grid grid-cols-12 grid-rows-1 gap-2 h-[540px]">
                        {project?.sections[section]?.images?.map((image, index) => {
                            return <img key={index} src={`http://localhost:1337${image.url}`} alt="" className="object-cover rounded-lg col-span-4 w-full row-span-full h-full" />
                        })}
                    </figure>
                    : null
            }
        </>

    )
}