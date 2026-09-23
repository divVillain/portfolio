import ProjectHeader from "./Modules/Projects/ProjectHeader.jsx";
import ProjectEntry from "./Modules/Projects/ProjectEntry.jsx";
import NextProject from "./Modules/Projects/NextProject.jsx";
import PROJECTS from "./data/PROJECTS.json";
import ProjectSlogan from "./Modules/Projects/ProjectSlogan.jsx";
import ProjectLayout from "./Modules/Projects/ProjectLayout.jsx";

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

export default function Democrata() {
  return (
    <ProjectLayout>
      {PROJECTS[0] ? <ProjectHeader project={PROJECTS[1]} /> : null}

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
                  The platform assumed users would read full articles from start
                  to finish, while many readers today prefer scannable formats
                  and quick summaries.
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
        <div className="grid grid-cols-10 gap-4 w-full">
          <video
            controlsList="nodownload"
            autoPlay
            muted
            loop
            className="col-span-7 h-full object-cover rounded-md"
            src="/projects/democrata/democrata-home.mp4"
          />
          <img
            className="col-span-3 object-cover rounded-md"
            src="/projects/democrata/dem-02.jpg"
          />
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
                Readers frequently move between platforms and often consume news
                in short time windows. Content needs to support both quick
                scanning and deeper reading.
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
            The redesign focused on three objectives:
          </p>
        </SectionHeading>
        <BulletList>
          <Bullet
            content="Modernize the strong digital experience
            without compromising editorial credibility"
          />
          <Bullet content="Redesign the brand with a new logo, color palette and typography" />
          <Bullet content="Develop a new modular design system" />
          <Bullet content="Introduce AI capabilities" />
        </BulletList>
      </AnchorSection>
      <ImageSection>
        <div className="grid grid-cols-11 gap-4 w-full">
          <img
            className="col-span-8 rounded-md h-full object-cover"
            src="/projects/democrata/demo-logo.jpg"
            alt=""
          />
          <img
            className="col-span-3 rounded-md h-full object-cover"
            src="/projects/democrata/demo-iso.jpg"
            alt=""
          />
        </div>
      </ImageSection>

      <AnchorSection id="Design Process" index="4">
        <SectionHeading>
          <p className="text-primary body-xlarge">
            Digital-first editorial identity
          </p>
          <p>
            The visual identity was evolved to maintain the publication’s
            institutional credibility while introducing a more contemporary
            digital language.
          </p>
        </SectionHeading>
        <BulletList>
          <Bullet content="A digital-first typographic system optimized for long reading sessions" />
          <Bullet content="An updated color palette with clearer hierarchy" />
          <Bullet content="Improved spacing and visual rhythm for editorial layouts" />
          <Bullet content="New logo that reflects the publication’s classical identity with a modern twist" />
          <Bullet content="Use of negative space to transmit a calm tone in this oversaturated era" />
        </BulletList>

        <p className="heading-large text-primary w-full pt-8">
          The goal was to create a{" "}
          <strong className="text-primary-red">
            design language that communicates journalistic authority{" "}
          </strong>{" "}
          while feeling modern and accessible.
        </p>
      </AnchorSection>

      <ImageSection>
        <div className="grid grid-cols-8 gap-4">
          <video
            controlsList="nodownload"
            autoPlay
            muted
            loop
            className=" object-cover rounded-md col-span-5"
            src="/projects/democrata/democrata-article.mp4"
          />
          <img
            className="col-span-3 rounded-md h-full object-cover"
            src="/projects/democrata/demo-home.jpg"
            alt=""
          />
        </div>
        <div className="grid grid-cols-7 gap-4">
          <img
            className="col-span-3 rounded-md h-full object-cover"
            src="/projects/democrata/dem-26.jpg"
            alt=""
          />
          <img
            className=" object-cover rounded-md col-span-4"
            src="/projects/democrata/dem-25.jpg"
          />
        </div>
        <Image src="/projects/democrata/dem-03.jpg" />
        <div className="grid grid-cols-8 gap-4 w-full">
          <img
            className="col-span-5 rounded-md h-full object-cover"
            src="/projects/democrata/dem-04.jpg"
            alt=""
          />
          <img
            className="col-span-3 rounded-md h-full object-cover"
            src="/projects/democrata/dem-05.jpg"
            alt=""
          />
        </div>
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
              <Bullet content="Breaking news modules" />
              <Bullet content="Dynamic articles blocks with up to four columns for a more dynamic layout" />
              <Bullet content="Different article layouts for different types of content" />
              <Bullet content="Live events" />
              <Bullet content="Integrated Ads and Social Media optimized not to break the layout" />
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
        <div className="grid grid-cols-3 gap-4 w-full">
          <img
            className="rounded-md col-span-1 h-full object-cover"
            src="/projects/democrata/dem-08.jpg"
          />
          <img
            className="rounded-md col-span-2 object-cover"
            src="/projects/democrata/dem-09.jpg"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          <img
            className="rounded-md col-span-1 h-full object-cover"
            src="/projects/democrata/dem-14.jpg"
          />
          <img
            className="rounded-md col-span-1 h-full object-cover"
            src="/projects/democrata/dem-23.jpg"
          />
        </div>
        <div className="grid grid-cols-7 gap-4 w-full">
          <img
            className="rounded-md col-span-3 h-full object-cover"
            src="/projects/democrata/demo-anatomy-01.jpg"
          />
          <img
            className="rounded-md col-span-3 h-full object-cover"
            src="/projects/democrata/demo-anatomy-02.jpg"
          />
          <img
            className="rounded-md col-span-1 h-full"
            src="/projects/democrata/demo-anatomy-03.jpg"
          />
        </div>
      </ImageSection>

      <AnchorSection>
        <SectionHeading>
          <p className="text-primary body-xlarge">
            Rather than using AI to generate news content, the product
            integrates AI as a tool to help readers understand complex political
            information.
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
        <div className="grid grid-cols-3 gap-4">
          <img
            className="col-span-1 h-full object-cover rounded-md"
            src="/projects/democrata/dem-18.jpg"
          />
          <img
            className="col-span-1 h-full object-cover rounded-md"
            src="/projects/democrata/dem-19.jpg"
          />
          <img
            className="col-span-1 h-full object-cover rounded-md"
            src="/projects/democrata/dem-24.jpg"
          />
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
            The redesigned platform helped modernize the digital presence of the
            publication while maintaining its editorial authority.
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

      <NextProject project={PROJECTS[2]} />
    </ProjectLayout>
  );
}
