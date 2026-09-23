import ProjectHeader from "./Modules/Projects/ProjectHeader.jsx";
import ProjectEntry from "./Modules/Projects/ProjectEntry.jsx";
import NextProject from "./Modules/Projects/NextProject.jsx";
import PROJECTS from "./data/PROJECTS.json";
import ProjectSlogan from "./Modules/Projects/ProjectSlogan.jsx";
import ProjectLayout from "./Modules/Projects/ProjectLayout.jsx";

import { useEffect, useState } from "react";

import {
  Heading,
  Insight,
  InsightList,
  Section,
  Bullet,
  BulletList,
  AnchorSection,
  BodyBlock,
  SectionHeading,
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
  return (
    <ProjectLayout>
      {PROJECTS[0] ? <ProjectHeader project={PROJECTS[0]} /> : null}

      <ProjectSlogan
        projectSlogan="Embracing the art of "
        projectSloganStrong="slow travel"
      />

      <AnchorSection id="Problem" index="1">
        <SectionHeading>
          <p className="text-primary body-xlarge">
            The original website did not communicate the value of the product.
          </p>
          <p>
            Despite offering premium experiences, the digital experience felt
            generic and difficult to navigate. The analysis of the user journey
            revealed three main issues:
          </p>
        </SectionHeading>
        <InsightList>
          <Section>
            <Insight>
              <Heading
                heading={
                  <>
                    Destination exploration was{" "}
                    <strong className="text-primary-red display-decorative-xsmall">
                      unclear
                    </strong>
                  </>
                }
              >
                <p>
                  Users interested in traveling across Spain struggled to
                  understand:
                </p>
              </Heading>
              <BulletList>
                <Bullet content="Where tours took place"></Bullet>
                <Bullet content="How destinations connected"></Bullet>
              </BulletList>
            </Insight>
          </Section>
          <Section>
            <Insight>
              <Heading
                heading={
                  <>
                    Tours were presented as{" "}
                    <strong className="text-primary-red display-decorative-xsmall">
                      isolated products
                    </strong>
                  </>
                }
              >
                <p>
                  Tours were organized as lists of products, while travelers
                  actually think about trips as routes and journeys across
                  destinations. This mismatch made it difficult for users to
                  imagine the travel experience.
                </p>
              </Heading>
            </Insight>
          </Section>
          <Section>
            <Insight>
              <Heading
                heading={
                  <>
                    Booking created{" "}
                    <strong className="text-primary-red display-decorative-xsmall">
                      uncertainty
                    </strong>
                  </>
                }
              >
                <p>The checkout process lacked clarity around:</p>
              </Heading>
              <BulletList>
                <Bullet content="Itinerary details"></Bullet>
                <Bullet content="Pricing transparency"></Bullet>
                <Bullet content="Trip confirmation"></Bullet>
              </BulletList>
            </Insight>
          </Section>
          <p className="heading-large text-primary">
            For a high-value purchase,{" "}
            <strong className="text-primary-red">
              {" "}
              this uncertainty created friction and hesitation.
            </strong>
          </p>
        </InsightList>
      </AnchorSection>
      <div className="grid grid-cols-7 gap-4 w-full">
        <img
          className="col-span-5 h-full object-cover rounded-md"
          src="/projects/the-other-spain/tos-01.jpg"
        />
        <img
          className="col-span-2 object-cover rounded-md"
          src="/projects/the-other-spain/tos-02.jpg"
        />
      </div>
      <AnchorSection id="Research & insights" index="2">
        <SectionHeading>
          <p className="text-primary body-xlarge">
            We analyzed the existing user journey and identified key friction
            points in the exploration and booking flows.
          </p>
        </SectionHeading>
        <Insight>
          <Heading
            heading={
              <>
                <strong className="text-primary-red display-decorative-xsmall">
                  Travelers plan trips through routes,
                </strong>{" "}
                not destinations
              </>
            }
          >
            <p>
              Users were trying to mentally connect cities and regions while
              browsing. Without a clear visualization of routes, exploration
              became confusing.
            </p>
          </Heading>
        </Insight>
        <Insight>
          <Heading
            heading={
              <>
                High-value travel{" "}
                <strong className="text-primary-red display-decorative-xsmall">
                  requires confidence
                </strong>
              </>
            }
          >
            <p>
              Users need reassurance before committing to expensive trips. Clear
              itineraries, transparent pricing and trust signals play a crucial
              role.
            </p>
          </Heading>
        </Insight>
        <Insight>
          <Heading
            heading={
              <>
                Exploration should feel{" "}
                <strong className="text-primary-red display-decorative-xsmall">
                  inspiring
                </strong>
              </>
            }
          >
            <p>
              Travel planning is an emotional process. The product experience
              needed to feel exploratory and inspiring, not transactional.
            </p>
          </Heading>
        </Insight>
      </AnchorSection>
      <AnchorSection id="Product Strategy" index="3">
        <BodyBlock>
          <p className="text-primary body-xlarge">
            Based on these insights, the redesign focused on two main
            objectives:
          </p>
        </BodyBlock>
        <Insight>
          <Heading
            heading={
              <>
                Improve{" "}
                <strong className="text-primary-red display-decorative-xsmall">
                  product discovery
                </strong>
              </>
            }
          >
            <p>By aligning the experience with how travelers plan trips.</p>
          </Heading>
        </Insight>
        <Insight>
          <Heading
            heading={
              <>
                Reduce{" "}
                <strong className="text-primary-red display-decorative-xsmall">
                  booking friction
                </strong>
              </>
            }
          >
            <p>By simplifying decision-making during checkout.</p>
          </Heading>
        </Insight>
        <div className="flex flex-col gap-6 mt-10">
          <p className="heading-large text-primary">
            This led to a{" "}
            <strong className="text-primary-red">new journey structure:</strong>
          </p>
          <ul className="flex items-center justify-between">
            <li className="flex gap-2 items-center surface-subtle px-[12px] py-[8px] rounded-s">
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.4298 1.91452C16.9815 1.46607 16.4493 1.11034 15.8636 0.867629C15.2778 0.624922 14.65 0.5 14.016 0.5C13.3819 0.5 12.7541 0.624922 12.1683 0.867629C11.5826 1.11034 11.0504 1.46607 10.6022 1.91452L9.67191 2.84476L8.74167 1.91452C7.83627 1.00912 6.60828 0.500469 5.32786 0.500469C4.04743 0.500469 2.81945 1.00912 1.91405 1.91452C1.00865 2.81992 0.5 4.0479 0.5 5.32833C0.5 6.60875 1.00865 7.83674 1.91405 8.74214L9.67191 16.5L17.4298 8.74214C17.8782 8.29391 18.2339 7.76171 18.4767 7.17596C18.7194 6.5902 18.8443 5.96237 18.8443 5.32833C18.8443 4.69428 18.7194 4.06645 18.4767 3.4807C18.2339 2.89494 17.8782 2.36275 17.4298 1.91452Z"
                  stroke="#ff2f00"
                />
              </svg>
              Inspire
            </li>
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 5.72364H16.8548M16.8548 5.72364L11.4847 0.353516M16.8548 5.72364L11.4847 11.0938"
                stroke="#6d6d6d"
              />
            </svg>

            <li className="flex gap-2 items-center surface-subtle px-[12px] py-[8px] rounded-s">
              <svg
                width="15"
                height="18"
                viewBox="0 0 15 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5909 7.04545C13.5909 12.1364 7.04545 16.5 7.04545 16.5C7.04545 16.5 0.5 12.1364 0.5 7.04545C0.5 5.30949 1.18961 3.64463 2.41712 2.41712C3.64463 1.18961 5.30949 0.5 7.04545 0.5C8.78142 0.5 10.4463 1.18961 11.6738 2.41712C12.9013 3.64463 13.5909 5.30949 13.5909 7.04545Z"
                  stroke="#ff2f00"
                />
                <path
                  d="M7.04545 9.22727C8.25044 9.22727 9.22727 8.25044 9.22727 7.04545C9.22727 5.84047 8.25044 4.86364 7.04545 4.86364C5.84047 4.86364 4.86364 5.84047 4.86364 7.04545C4.86364 8.25044 5.84047 9.22727 7.04545 9.22727Z"
                  stroke="#ff2f00"
                />
              </svg>
              Select route
            </li>
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 5.72364H16.8548M16.8548 5.72364L11.4847 0.353516M16.8548 5.72364L11.4847 11.0938"
                stroke="#6d6d6d"
              />
            </svg>

            <li className="flex gap-2 items-center surface-subtle px-[12px] py-[8px] rounded-s">
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0.5H3.04762L5.08952 10.7019C5.1592 11.0527 5.35002 11.3678 5.62861 11.592C5.90719 11.8163 6.25577 11.9354 6.61333 11.9286H14.019C14.3766 11.9354 14.7252 11.8163 15.0038 11.592C15.2824 11.3678 15.4732 11.0527 15.5429 10.7019L16.7619 4.30952H3.80952M6.85714 15.7381C6.85714 16.1589 6.51603 16.5 6.09524 16.5C5.67445 16.5 5.33333 16.1589 5.33333 15.7381C5.33333 15.3173 5.67445 14.9762 6.09524 14.9762C6.51603 14.9762 6.85714 15.3173 6.85714 15.7381ZM15.2381 15.7381C15.2381 16.1589 14.897 16.5 14.4762 16.5C14.0554 16.5 13.7143 16.1589 13.7143 15.7381C13.7143 15.3173 14.0554 14.9762 14.4762 14.9762C14.897 14.9762 15.2381 15.3173 15.2381 15.7381Z"
                  stroke="#ff2f00"
                />
              </svg>
              Book
            </li>
          </ul>
          <p>
            Instead of starting with product lists, the experience now guides
            users from inspiration to a clear travel plan.
          </p>
        </div>
      </AnchorSection>
      <ImageSection>
        <Image src="/projects/the-other-spain/tos-03.jpg" />
      </ImageSection>
      <AnchorSection id="Design Process" index="4">
        <Insight>
          <Heading
            heading={
              <>
                Restructuring the{" "}
                <strong className="text-primary-red display-decorative-xsmall">
                  information architecture
                </strong>
              </>
            }
          >
            <BodyBlock>
              <p>
                The first step was reorganizing the platform around travel
                routes instead of individual tours. This allowed users to:
              </p>
              <p>This allowed users to:</p>
            </BodyBlock>
          </Heading>
          <BulletList>
            <Bullet content="Understand how destinations connect"></Bullet>
            <Bullet content="Explore experiences within each route"></Bullet>
            <Bullet content="Compare different travel options more easily"></Bullet>
          </BulletList>
        </Insight>
        <Insight>
          <Heading
            heading={
              <>
                Interactive{" "}
                <strong className="text-primary-red display-decorative-xsmall">
                  planning map
                </strong>
              </>
            }
          >
            <BodyBlock>
              <p>
                To support route discovery, I designed an interactive map of
                Spain that allows users to visually explore travel
                possibilities.
              </p>
              <p>Through the map users can:</p>
            </BodyBlock>
          </Heading>
          <BulletList>
            <Bullet content="Choose where they are traveling from"></Bullet>
            <Bullet content="Explore destinations"></Bullet>
            <Bullet content="Visualize available routes"></Bullet>
            <Bullet content="Discover experiences along each journey"></Bullet>
          </BulletList>
        </Insight>
        <p className="heading-large text-primary">
          This transformed browsing from a static catalog into a{" "}
          <strong className="text-primary-red">visual exploration tool.</strong>
        </p>
      </AnchorSection>
      <ImageSection>
        <div className="grid grid-cols-7 gap-4 w-full">
          <video
            playsInline
            autoPlay
            muted
            loop
            className="col-span-4 h-full object-cover rounded-md"
            src="/projects/the-other-spain/tos-map.mp4"
          />
          <img
            className="col-span-3 object-cover rounded-md h-full"
            src="/projects/the-other-spain/tos-04.jpg"
          />
        </div>
      </ImageSection>
      <AnchorSection anchor="false">
        <SectionHeading>
          <p className="body-xlarge text-primary">
            Planning a premium trip involves multiple decisions.
          </p>
        </SectionHeading>
        <Insight>
          <Heading
            heading={
              <>
                Guided tour{" "}
                <strong className="text-primary-red display-decorative-xsmall">
                  selection flow
                </strong>
              </>
            }
          >
            <p>
              To simplify the process, I designed a guided selection flow that
              breaks down the decision into clear steps. The flow helps users
              progressively define their trip:
            </p>
          </Heading>
          <BulletList>
            <Bullet content="1. Select travel route"></Bullet>
            <Bullet content="2. Choose private or small-group tour"></Bullet>
            <Bullet content="3. Check dates and availability"></Bullet>
            <Bullet content="4. Confirm itinerary"></Bullet>
          </BulletList>
        </Insight>
        <p className="heading-large text-primary">
          This structure{" "}
          <strong className="text-primary-red">reduces cognitive load</strong>{" "}
          and helps users move forward with confidence.
        </p>
      </AnchorSection>
      <ImageSection>
        <video
          playsInline
          autoPlay
          muted
          loop
          className="col-span-4 h-full object-cover rounded-md"
          src="/projects/the-other-spain/tos-book.mp4"
        />
        <Image src="/projects/the-other-spain/tos-07.jpg" />
      </ImageSection>
      <AnchorSection>
        <Insight>
          <Heading
            heading={
              <>
                Checkout{" "}
                <strong className="text-primary-red display-decorative-xsmall">
                  optimization
                </strong>
              </>
            }
          >
            <p>
              The checkout experience was redesigned to prioritize the
              information users care about most when making a high-value
              purchase. Key improvements included:
            </p>
          </Heading>
          <BulletList>
            <Bullet content="Clear trip summary"></Bullet>
            <Bullet content="Transparent pricing breakdown"></Bullet>
            <Bullet content="Visible trust signals"></Bullet>
            <Bullet content="Simplified booking steps"></Bullet>
          </BulletList>
        </Insight>
        <p className="heading-large text-primary">
          This <strong className="text-primary-red">reduced uncertainty</strong>{" "}
          during the final stage of the journey.
        </p>
      </AnchorSection>
      <ImageSection>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col gap-4 col-span-2">
            <div className="grid grid-cols-2 gap-4">
              <img
                className="col-span-1 rounded-md"
                src="/projects/the-other-spain/tos-10.jpg"
              />
              <img
                className="col-span-1 rounded-md"
                src="/projects/the-other-spain/tos-12.jpg"
              />
            </div>
            <img
              className="w-full rounded-md"
              src="/projects/the-other-spain/tos-13.jpg"
            />
          </div>
          <img
            className="col-span-1 rounded-md h-full object-cover"
            src="/projects/the-other-spain/tos-05.jpg"
          />
        </div>
      </ImageSection>
      <AnchorSection id="Output" index="5">
        <SectionHeading>
          <p className="body-xlarge text-primary">
            The redesign resulted in a new end-to-end experience including:
          </p>
        </SectionHeading>
        <BulletList>
          <Bullet content="Complete website redesign"></Bullet>
          <Bullet content="New visual identity aligned with the premium positioning"></Bullet>
          <Bullet content="Interactive travel planning map"></Bullet>
          <Bullet content="Guided tour selection flow"></Bullet>
          <Bullet content="Simplified checkout experience"></Bullet>
          <Bullet content="Scalable design system for future product expansion"></Bullet>
        </BulletList>
        <p>
          The new experience enables international travelers to discover, plan,
          and book trips across Spain with greater clarity and confidence.
        </p>
      </AnchorSection>
      <AnchorSection id="Outcome" index="6">
        <SectionHeading>
          <p className="body-xlarge text-primary">
            The new experience improved both product discovery and booking
            confidence. Key improvements included:
          </p>
        </SectionHeading>
        <BulletList>
          <Bullet content="Increased exploration of destinations and routes"></Bullet>
          <Bullet content="Higher engagement with the interactive planning map"></Bullet>
          <Bullet content="Reduced friction during the booking process"></Bullet>
          <Bullet content="Improved conversion of premium tours"></Bullet>
          <Bullet content="Stronger perception of brand quality"></Bullet>
        </BulletList>
        <p className="heading-large text-primary">
          The redesigned platform now enables international travelers to
          <strong className="text-primary-red">
            {" "}
            discover, plan and book travel experiences across Spain
          </strong>{" "}
          with greater clarity and confidence.
        </p>
      </AnchorSection>
      <NextProject project={PROJECTS[1]} />
    </ProjectLayout>
  );
}
