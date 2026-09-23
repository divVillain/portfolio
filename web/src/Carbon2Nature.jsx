import ProjectHeader from "./Modules/Projects/ProjectHeader.jsx";
import NextProject from "./Modules/Projects/NextProject.jsx";
import PROJECTS from "./data/PROJECTS.json";
import ProjectSlogan from "./Modules/Projects/ProjectSlogan.jsx";
import ProjectLayout from "./Modules/Projects/ProjectLayout.jsx";

import {
  Heading,
  SubHeading,
  Insight,
  InsightList,
  SectionHeading,
  Section,
  Bullet,
  BulletList,
  AnchorSection,
  BodyBlock,
  Image,
  ImageList,
  ImageSection,
} from "./Modules/Projects/ContentBlocks.jsx";

function Block({ children, id }) {
  return (
    <article id={`${id}`} className="flex justify-between w-full">
      {children}
    </article>
  );
}

export default function Carbon2Nature() {
  return (
    <ProjectLayout>
      {PROJECTS[2] ? <ProjectHeader project={PROJECTS[2]} /> : null}

      <ProjectSlogan
        projectSlogan="Solutions based on "
        projectSloganStrong="Nature"
      />
      <AnchorSection id="Problem" index="1">
        <SectionHeading>
          <p className="text-primary body-xlarge">
            Carbon2Nature's (C2N) original website functioned as a data
            repository: hectares, tons of CO2, number of trees planted. Accurate
            figures, but no story.
          </p>
        </SectionHeading>
        <Section>
          <InsightList>
            <Insight>
              <Heading
                heading={
                  <>
                    Diluted{" "}
                    <strong className="text-primary-red display-decorative-xsmall">
                      identity
                    </strong>
                  </>
                }
              >
                <p>
                  Born within Iberdrola's brand ecosystem, C2N lacked a visual
                  identity of its own capable of conveying its mission: nature
                  as a lever for value creation, not just a sustainability
                  metric.
                </p>
              </Heading>
            </Insight>
            <Insight>
              <Heading
                heading={
                  <>
                    Projects without{" "}
                    <strong className="text-primary-red display-decorative-xsmall">
                      context
                    </strong>
                  </>
                }
              >
                <p>
                  Each forestry project was presented as an isolated technical
                  sheet, without connecting the scale of the data to the real
                  impact on the territory and local communities.
                </p>
              </Heading>
            </Insight>
          </InsightList>
          <p className="heading-large text-primary w-full pt-8">
            <strong className="text-primary-red">
              The challenge was to build a proprietary digital identity
            </strong>{" "}
            within the Iberdrola ecosystem, capable of turning impact data into
            a credible, tangible story.
          </p>
        </Section>
      </AnchorSection>
      <ImageSection>
        <div className="grid grid-cols-2 w-full gap-4">
          <div className="flex flex-col gap-4 w-full">
            <video
              playsInline
              autoPlay
              loop
              muted
              className=" w-full object-cover rounded-md "
              src="/projects/carbon2nature/c2n-home.mp4"
            />
            <img
              src="/projects/carbon2nature/c2n-01.jpg"
              className="fade-in w-full rounded-lg object-cover"
            />
          </div>

          <img
            src="/projects/carbon2nature/c2n-02.jpg"
            className="fade-in w-full rounded-lg object-cover h-full"
          />
        </div>
      </ImageSection>

      <AnchorSection id="Design Process" index="2">
        <SectionHeading>
          <p className="text-primary body-xlarge">
            The goal was to create a visual language that communicated technical
            authority without losing warmth.
          </p>
          <p className="text-secondary body">
            A palette drawn from the ecosystems the project protects (forest,
            earth, water), paired with clean typography and a documentary-style
            photography system, moving away from generic sustainability stock
            imagery.
          </p>
        </SectionHeading>
        <BulletList>
          <Bullet content="A modular system was designed to adapt to different narrative formats." />
          <Bullet content="Each project is now structured in three layers: the territory, the action , and the impact." />
        </BulletList>
      </AnchorSection>

      <ImageSection>
        <div className="grid grid-cols-2 w-full gap-4">
          <video
            playsInline
            autoPlay
            loop
            muted
            className=" w-full object-cover rounded-md "
            src="/projects/carbon2nature/c2n-comparison.mp4"
          />
          <Image src="/projects/carbon2nature/c2n-05.jpg" />
        </div>
      </ImageSection>

      <AnchorSection>
        <SectionHeading>
          <p className="text-primary body-xlarge">Interactive global map</p>
          <article className="flex flex-col gap-4">
            <p className="text-secondary body">
              The previous platform had a map that performed poorly: it
              redirected to incorrect zones, required too many steps to reach a
              project, and offered no filtering at all, resulting in navigation
              that was unintuitive and frustrating.
            </p>
            <p className="text-secondary body">
              It was redesigned from the ground up as an interactive map that
              lets users explore Carbon2Nature's global presence directly, with
              filters by typology (forest management, reforestation, blue
              carbon, agriculture), project status, and location. Each area of
              the map gives immediate access to the corresponding project pages,
              reducing navigation to a single step and making the geographic
              scale of C2N's impact tangible.
            </p>
          </article>
        </SectionHeading>
      </AnchorSection>

      <ImageSection>
        <div className="grid grid-cols-6 gap-4 w-full">
          <img
            className="col-span-2 object-cover rounded-md"
            src="/projects/carbon2nature/c2n-06.jpg"
          />
          <video
            playsInline
            autoPlay
            loop
            muted
            className="col-span-4 h-full object-cover rounded-md "
            src="/projects/carbon2nature/c2n-map.mp4"
          />
        </div>
      </ImageSection>

      <AnchorSection id="Outcome" index="3">
        <SectionHeading>
          <p className="text-primary body-xlarge">
            The project resulted in a complete redesign of the digital platform,
            including:
          </p>
        </SectionHeading>
        <BulletList>
          <Bullet content="New digital visual identity" />
          <Bullet content="Modular, scalable design system" />
          <Bullet content="New content architecture for projects" />
          <Bullet content="Photography and impact-data system" />
        </BulletList>
      </AnchorSection>
      <NextProject project={PROJECTS[0]} />
    </ProjectLayout>
  );
}
