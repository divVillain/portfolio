export default function ProjectSlogan({ projectSlogan, projectSloganStrong }) {
  return (
    <div className="max-w-[800px] flex flex-col items-center  gap-10">
      <svg
        width="121"
        height="1"
        viewBox="0 0 121 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="0.5" x2="120.695" y2="0.5" stroke="#B4B4B4" />
      </svg>

      <span className="text-primary display-decorative-small text-center text-pretty">
        {projectSlogan}
        <strong className="display-decorative-small text-primary-red">
          {projectSloganStrong}
        </strong>
      </span>
      <svg
        width="121"
        height="1"
        viewBox="0 0 121 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="0.5" x2="120.695" y2="0.5" stroke="#B4B4B4" />
      </svg>
    </div>
  );
}
