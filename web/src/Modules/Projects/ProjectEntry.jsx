import ButtonPrimary from "../../Components/Button";

export default function ProjectEntry({ project, id }) {
  return (
    <section
      className="w-full flex justify-center relative max-w-[800px] surface-opacity-40 p-6 md:p-10 rounded-lg backdrop-blur-sm"
      id={id}
    >
      <div className="w-full flex flex-col md:flex-row justify-between gap-10">
        <aidse className="flex flex-col max-w-[326px] gap-4 md:pr-10 md:border-r-[.5px] md:border-default">
          <article className="flex flex-col gap-2">
            <span className="text-primary xheading-small">Team</span>
            <span className="body-small text-tertiary">Prodigioso Volcán</span>
          </article>
          <article className="flex flex-col gap-2">
            <span className="text-primary heading-xsmall">Project</span>
            <ul className="flex flex-wrap gap-2">
              {project?.project_categories.map((category, index) => {
                return (
                  <li className="flex gap-4" key={index}>
                    <span className="body-small text-tertiary shrink-0 w-auto">
                      {category.name}
                    </span>
                  </li>
                );
              })}
            </ul>
          </article>
          <article className="flex flex-col gap-2">
            <span className="text-primary heading-xsmall">My Role</span>
            <span className="body-small text-tertiary">Product Designer</span>
          </article>
          {project?.projectUrl ? (
            <ButtonPrimary projectUrl={project?.projectUrl} />
          ) : null}
        </aidse>

        <article className="flex gap-4 flex-col w-full">
          <h2 className="text-primary heading-small">Overview</h2>
          <p className="body-default text-secondary leading-[160%]">
            {project?.projectEntryDescription}
          </p>
        </article>
      </div>
    </section>
  );
}
