export default function Projectsvideos({ project, section }) {
    return (
        <>
            {
                project?.sections[section]?.videos?.length === 1 ?
                    <figure className=" px-8 py-[4px] bg-white flex items-center justify-center w-full">
                        <video
                            autoPlay
                            loop
                            muted
                            src={`http://localhost:1337${project?.sections[section]?.videos[0].url}`}                            
                            className="fade-in w-full aspect-[16/9] object-cover rounded-lg" />
                    </figure>
                    : null}
            {
                project?.sections[section]?.videos?.length === 2 ?
                    <figure className=" px-8 py-[4px] bg-white w-full grid grid-cols-12 grid-rows-1 gap-2 h-[540px]">
                        {project?.sections[section]?.videos?.map((image, index) => {
                            return <video
                                autoPlay
                                loop
                                muted
                                key={index}
                                src={`http://localhost:1337${image.url}`}                                
                                className="fade-in object-cover rounded-lg col-span-6 w-full row-span-full h-full" />
                        })}
                    </figure>
                    : null
            }
            {
                project?.sections[section]?.videos?.length === 3 ?
                    <figure className=" px-8 py-[4px] bg-white w-full grid grid-cols-12 grid-rows-1 gap-2 h-[540px]">
                        {project?.sections[section]?.videos?.map((image, index) => {
                            return <video
                                autoPlay
                                loop
                                muted
                                key={index}
                                src={`http://localhost:1337${image.url}`}                                
                                className="fade-in object-cover rounded-lg col-span-4 w-full row-span-full h-full" />
                        })}
                    </figure>
                    : null
            }
        </>

    )
}