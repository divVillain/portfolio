import { Link } from "react-router-dom";


function ButtonPrimary({ projectUrl }) {
    return (
        <a className="flex w-fit surface-primary-red text-primary body-default px-4 py-[6px] rounded-sm" href={projectUrl} target="_blank">
            View Project
        </a>
    )
}

export default ButtonPrimary