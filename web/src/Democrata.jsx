import ProjectHeader from "./Modules/Projects/ProjectHeader.jsx";
import ProjectEntry from "./Modules/Projects/ProjectEntry.jsx";
import NextProject from "./Modules/Projects/NextProject.jsx";
import PROJECTS from "./data/PROJECTS.json";
import ProjectSlogan from "./Modules/Projects/ProjectSlogan.jsx";

import { useEffect, useState } from "react";

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

export default function TheOtherSpain() {
  const [activeId, setActiveId] = useState("");

  // IDs de tus secciones
  const itemIds = [
    "Overview",
    "Problem",
    "Research & insights",
    "Product Strategy",
    "Design Process",
    "Output",
    "Outcome",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Si la sección entra en el 40% superior de la pantalla, la activamos
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -60% 0%" }, // Ajuste para que el cambio sea natural al hacer scroll
    );

    itemIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full text-[16px] bg-[#161616] py-40 flex flex-col gap-20 items-center text-secondary">
      <div className="max-w-[800px] w-full flex flex-col gap-[120px] items-end relative">
        {PROJECTS[0] ? <ProjectHeader project={PROJECTS[1]} /> : null}
        <div className="absolute top-20 right-0 translate-x-[150%] h-full ">
          <ul className="flex flex-col gap-2 sticky top-40 left-0 w-full">
            {itemIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`transition-colors duration-200 block py-1 ${
                    activeId === id
                      ? "text-primary-red font-medium border-l-2 border-[#ff2f00] pl-3" // Estilo activo
                      : "text-tertiary hover:text-white pl-3 border-l-2 border-transparent" // Estilo inactivo
                  }`}
                >
                  {id
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {PROJECTS[0] ? (
          <ProjectEntry
            project={PROJECTS[1]}
            id={"Overview"}
            projectUrl={"https://www.democrata.es/"}
          />
        ) : null}

        <ProjectSlogan
          projectSlogan="A new experience for "
          projectSloganStrong="parliamentary journalism"
        />
        <AnchorSection id="Problem" index="1">
          <SectionHeading>
            <p className="text-primary body-xlarge">
              The existing product reflected a traditional editorial model that
              did not fully align with modern digital news consumption patterns.
            </p>
          </SectionHeading>
          <BodyBlock>
            <p>Four main challenges emerged.</p>
          </BodyBlock>
          <Section>
            <InsightList>
              <Insight>
                <Heading
                  heading={
                    <>
                      Institutional{" "}
                      <strong className="text-primary-red display-decorative-xsmall">
                        visual identity
                      </strong>
                    </>
                  }
                >
                  <p>
                    The visual language felt formal and rigid, reinforcing
                    credibility but making the product less appealing to younger
                    audiences.
                  </p>
                </Heading>
              </Insight>
              <Insight>
                <Heading
                  heading={
                    <>
                      Reading experience designed for strong{" "}
                      <strong className="text-primary-red display-decorative-xsmall">
                        long-form content
                      </strong>
                    </>
                  }
                >
                  <p>
                    The platform assumed users would read full articles from
                    start to finish, while many readers today prefer scannable
                    formats and quick summaries.
                  </p>
                </Heading>
              </Insight>
              <Insight>
                <Heading
                  heading={
                    <>
                      Complexity of{" "}
                      <strong className="text-primary-red display-decorative-xsmall">
                        parliamentary information
                      </strong>
                    </>
                  }
                >
                  <p>
                    Political and legislative content often involves technical
                    language and contextual references that can be difficult for
                    readers to understand.
                  </p>
                </Heading>
              </Insight>
              <Insight>
                <Heading
                  heading={
                    <>
                      Lack of a{" "}
                      <strong className="text-primary-red display-decorative-xsmall">
                        digital innovation strategy
                      </strong>
                    </>
                  }
                >
                  <p>
                    Although the team was interested in experimenting with AI,
                    there was no clear framework for integrating it into the
                    editorial product.
                  </p>
                </Heading>
              </Insight>
            </InsightList>
            <p className="heading-large text-primary w-full pt-8">
              <strong className="text-primary-red">
                The challenge was to modernize the product experience
              </strong>{" "}
              without compromising editorial authority or alienating existing
              readers.
            </p>
          </Section>
        </AnchorSection>
        <ImageSection>
          <div className="flex gap-2 w-full">
            <Image src="/projects/democrata/dem-01.jpg" />
            <Image src="/projects/democrata/dem-02.jpg" />
          </div>
        </ImageSection>
        <AnchorSection id="Research & insights" index="2">
          <SectionHeading>
            <p className="text-primary body-xlarge">
              We analyzed the existing user journey and identified key friction
              points in the exploration and booking flows.
            </p>
          </SectionHeading>
          <InsightList>
            <Insight>
              <Heading
                heading={
                  <>
                    News consumption is{" "}
                    <strong className="text-primary-red display-decorative-xsmall">
                      increasingly fragmented
                    </strong>
                  </>
                }
              >
                <p>
                  Readers frequently move between platforms and often consume
                  news in short time windows. Content needs to support both
                  quick scanning and deeper reading.
                </p>
              </Heading>
            </Insight>
            <Insight>
              <Heading
                heading={
                  <>
                    Political information requires{" "}
                    <strong className="text-primary-red display-decorative-xsmall">
                      contextualization
                    </strong>
                  </>
                }
              >
                <p>
                  Readers benefit from tools that help clarify political
                  terminology, legislative processes, and institutional
                  references.
                </p>
              </Heading>
            </Insight>
            <Insight>
              <Heading
                heading={
                  <>
                    Editorial teams need{" "}
                    <strong className="text-primary-red display-decorative-xsmall">
                      flexible publishing systems
                    </strong>
                  </>
                }
              >
                <p>
                  A rigid layout system makes it difficult for journalists to
                  adapt content to different formats such as breaking news,
                  analysis, or long-form coverage.
                </p>
              </Heading>
            </Insight>
          </InsightList>
        </AnchorSection>
        <AnchorSection id="Product Strategy" index="3">
          <SectionHeading>
            <p className="text-primary body-xlarge">
              The redesign focused on two main objectives:
            </p>
          </SectionHeading>
          <InsightList>
            <Insight>
              <Heading
                heading={
                  <>
                    Modernize the strong{" "}
                    <strong className="text-primary-red display-decorative-xsmall">
                      digital experience
                    </strong>
                  </>
                }
              >
                <p>Without compromising editorial credibility.</p>
              </Heading>
            </Insight>
            <Insight>
              <Heading
                heading={
                  <>
                    Improve{" "}
                    <strong className="text-primary-red display-decorative-xsmall">
                      accessibility
                    </strong>
                  </>
                }
              >
                <p>Of complex political information.</p>
              </Heading>
            </Insight>
            <Insight>
              <Heading
                heading={
                  <>
                    Introduce{" "}
                    <strong className="text-primary-red display-decorative-xsmall">
                      AI capabilities
                    </strong>
                  </>
                }
              >
                <p>
                  That support understanding rather than replace journalism.
                </p>
              </Heading>
            </Insight>
          </InsightList>
          <div className="flex flex-col gap-4">
            <p>This led to a new journey structure:</p>
            <BulletList>
              <Bullet content="Modular editorial design" />
              <Bullet content="Flexible reading experiences" />
              <Bullet content="AI-assisted comprehension tools" />
            </BulletList>
          </div>
        </AnchorSection>

        <AnchorSection id="Design Process" index="4">
          <Insight>
            <Heading
              heading={
                <>
                  Digital-first{" "}
                  <strong className="text-primary-red display-decorative-xsmall">
                    editorial identity
                  </strong>
                </>
              }
            >
              <p>
                The visual identity was evolved to maintain the publication’s
                institutional credibility while introducing a more contemporary
                digital language. Key improvements included:
              </p>
              <BulletList>
                <Bullet content="A digital-first typographic system optimized for long reading sessions" />
                <Bullet content="An updated color palette with clearer hierarchy" />
                <Bullet content="Improved spacing and visual rhythm for editorial layouts" />
              </BulletList>
            </Heading>
          </Insight>
          <p className="heading-large text-primary w-full pt-8">
            The goal was to create a{" "}
            <strong className="text-primary-red">
              design language that communicates journalistic authority{" "}
            </strong>{" "}
            while feeling modern and accessible.
          </p>
        </AnchorSection>

        <ImageSection>
          <Image src="/projects/democrata/dem-03.jpg" />
          <div className="flex gap-2 w-full">
            <Image src="/projects/democrata/dem-04.jpg" />
            <Image src="/projects/democrata/dem-05.jpg" />
          </div>
          <Image src="/projects/democrata/dem-06.jpg" />
          <Image src="/projects/democrata/dem-07.jpg" />
        </ImageSection>

        <AnchorSection>
          <SectionHeading>
            <p className="text-primary body-xlarge">
              A new modular content architecture was designed to support a wider
              variety of journalistic formats.
            </p>
          </SectionHeading>
          <Insight>
            <Heading
              heading={
                <>
                  Modular editorial{" "}
                  <strong className="text-primary-red"> design system</strong>
                </>
              }
            >
              <BodyBlock>
                <p>
                  Instead of fixed article templates, the platform now uses
                  flexible content blocks that can be combined depending on the
                  editorial needs.
                </p>
              </BodyBlock>
              <BulletList>
                <Bullet content="Breaking news summaries" />
                <Bullet content="Contextual information blocks" />
                <Bullet content="Quotes and statements" />
                <Bullet content="Data and legislative references" />
                <Bullet content="Long-form narrative sections" />
              </BulletList>
            </Heading>
          </Insight>
          <p className="heading-large text-primary w-full">
            This modular system enables the newsroom to{" "}
            <strong className="text-primary-red">
              publish more dynamic and scalable content while maintaining visual
              consistency.{" "}
            </strong>
          </p>
        </AnchorSection>

        <ImageSection>
          <div className="flex gap-2 w-full">
            <Image src="/projects/democrata/dem-08.jpg" />
            <Image src="/projects/democrata/dem-09.jpg" />
          </div>
          <Image src="/projects/democrata/dem-10.jpg" />
          <Image src="/projects/democrata/dem-11.jpg" />
          <Image src="/projects/democrata/dem-12.jpg" />
          <Image src="/projects/democrata/dem-13.jpg" />
          <Image src="/projects/democrata/dem-14.jpg" />
          <Image src="/projects/democrata/dem-15.jpg" />
        </ImageSection>

        <AnchorSection>
          <SectionHeading>
            <p className="text-primary body-xlarge">
              To support different reading behaviors, I designed a dual reading
              experience.
            </p>
          </SectionHeading>
          <InsightList>
            <Insight>
              <article className="flex flex-col gap-8 pt-6">
                <Heading
                  heading={
                    <>
                      <strong className="text-primary-red display-decorative-xsmall">
                        In-depth
                      </strong>{" "}
                      mode
                    </>
                  }
                >
                  <p>
                    A classic editorial layout designed for readers who want the
                    full article experience.
                  </p>
                </Heading>
              </article>
            </Insight>
            <Insight>
              <Heading
                heading={
                  <>
                    <strong className="text-primary-red display-decorative-xsmall">
                      Express
                    </strong>{" "}
                    mode
                  </>
                }
              >
                <p>A condensed version of the article featuring:</p>
                <BulletList>
                  <Bullet content="Summarized key points" />
                  <Bullet content="Scannable sections" />
                  <Bullet content="Highlighted takeaways" />
                </BulletList>
              </Heading>
            </Insight>
          </InsightList>
          <p className="heading-large text-primary w-full">
            This allows readers to{" "}
            <strong className="text-primary-red">
              quickly understand the main story{" "}
            </strong>{" "}
            while still having the option to dive deeper.
          </p>
        </AnchorSection>

        <ImageSection>
          <div className="flex gap-2 w-full">
            <Image src="/projects/democrata/dem-16.jpg" />
            <Image src="/projects/democrata/dem-17.jpg" />
          </div>
        </ImageSection>

        <AnchorSection>
          <SectionHeading>
            <p className="text-primary body-xlarge">
              Rather than using AI to generate news content, the product
              integrates AI as a tool to help readers understand complex
              political information.
            </p>
          </SectionHeading>
          <Insight>
            <Heading
              heading={
                <>
                  <strong className="text-primary-red display-decorative-xsmall">
                    AI-assisted
                  </strong>{" "}
                  news comprehension
                </>
              }
            >
              <BulletList>
                <Bullet content="Automated summaries of long articles" />
                <Bullet content="The ability to ask questions about specific topics within the article" />
                <Bullet content="Contextual explanations of political concepts and legislative processes" />
              </BulletList>
            </Heading>
          </Insight>
          <Insight>
            <Heading
              heading={
                <>
                  <strong className="text-primary-red display-decorative-xsmall">
                    Interactive engagement{" "}
                  </strong>
                  features
                </>
              }
            >
              <BodyBlock></BodyBlock>
              <BulletList>
                <Bullet content="Dynamic polls related to current political topics" />
                <Bullet content="Opinion voting on parliamentary decisions" />
                <Bullet content="Personalized content recommendations" />
              </BulletList>
            </Heading>
          </Insight>
        </AnchorSection>

        <ImageSection>
          <div className="flex gap-2 w-full">
            <Image src="/projects/democrata/dem-18.jpg" />
            <Image src="/projects/democrata/dem-19.jpg" />
          </div>
          <Image src="/projects/democrata/dem-20.jpg" />
        </ImageSection>

        <AnchorSection id="Output" index="5">
          <SectionHeading>
            <p className="text-primary body-xlarge">
              The project resulted in a redesigned digital product including:
            </p>
          </SectionHeading>
          <BulletList>
            <Bullet content="A refreshed digital identity" />
            <Bullet content="A modular editorial design system" />
            <Bullet content="A dual reading experience (traditional and quick mode)" />
            <Bullet content="AI-assisted news comprehension features" />
            <Bullet content="Interactive engagement tools such as polls and voting" />
            <Bullet content="A scalable product foundation for future editorial innovation" />
          </BulletList>
        </AnchorSection>

        <AnchorSection id="Outcome" index="6">
          <SectionHeading>
            <p className="text-primary body-xlarge">
              The redesigned platform helped modernize the digital presence of
              the publication while maintaining its editorial authority.
            </p>
          </SectionHeading>
          <BulletList>
            <Bullet content="Improved perception of the brand’s digital relevance" />
            <Bullet content="Greater accessibility of complex political content" />
            <Bullet content="Increased interaction with editorial features" />
            <Bullet content="Successful introduction of AI-assisted functionality" />
            <Bullet content="Retention of the existing readership during the transition" />
          </BulletList>
          <p className="heading-large text-primary w-full">
            The project positioned Demócrata as a political news platform
            <strong className="text-primary-red">
              {" "}
              prepared for a new generation of digital news consumption.
            </strong>
          </p>
        </AnchorSection>
      </div>
      <NextProject project={PROJECTS[0]} />
    </section>
  );
}
