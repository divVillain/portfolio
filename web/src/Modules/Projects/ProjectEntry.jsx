import ButtonPrimary from "../../Components/Button";

export default function ProjectEntry({ project, id, projectUrl }) {
  return (
    <section
      className="w-full flex justify-center pt-3 pb-20 relative max-w-[800px] "
      id={id}
    >
      <div className="w-full flex justify-between ">
        <aidse className="flex flex-col max-w-[326px] gap-4">
          <article className="flex flex-col gap-2">
            <span className="text-primary xheading-small">Team</span>
            <span className="body-small text-tertiary">Prodigioso Volcán</span>
          </article>
          <article className="flex flex-col gap-2">
            <span className="text-primary heading-xsmall">Project</span>
            <ul className="flex flex-wrap gap-4">
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
          <ButtonPrimary projectUrl={projectUrl} />
        </aidse>

        <article className="w-[440px] flex gap-4 flex-col">
          <h2 className="text-primary heading-small">Overview</h2>
          <p className="body-default text-secondary leading-[160%]">
            {project?.projectEntryDescription}
          </p>
        </article>
      </div>
    </section>
  );
}
