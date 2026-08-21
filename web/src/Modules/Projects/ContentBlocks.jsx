import "../../stylesheets/typography.css";
import "../../stylesheets/animations.css";

function Heading({ heading = "Heading", children }) {
  return (
    <header className="flex flex-col gap-4 w-full">
      <h3 className="text-primary display-decorative-xsmall">{heading}</h3>
      {children}
    </header>
  );
}
function SubHeading({ heading = "Heading", children }) {
  return (
    <header className="flex flex-col gap-4 w-full">
      <h4>{heading}</h4>
      {children}
    </header>
  );
}

function Insight({ children }) {
  return (
    <li className="fade-in flex gap-2 items-start pl-8 border-l-[1px] border-neutral-300">
      <article className="flex flex-col gap-4 w-full">{children}</article>
    </li>
  );
}

function InsightList({ children }) {
  return <ul className="flex flex-col gap-8">{children}</ul>;
}

function Section({ children }) {
  return <section className="flex flex-col gap-6">{children}</section>;
}

function Bullet({ content }) {
  return (
    <li className="surface-subtle px-4 py-2 rounded-s text-secondary body-default">
      {content}
    </li>
  );
}

function BulletList({ children }) {
  return <ul className="flex flex-col gap-2 mb-6">{children}</ul>;
}

function AnchorSection({ children, id, index="" }) {
  return (
    <article id={`${id}`} className="fade-in grid grid-cols-12 gap-10 w-full">
      {id ? (
        <div className="flex gap-4 col-span-4">
            <span className="text-tertiary body-xlarge">0{index}</span>
          <h2 className="col-span-4 text-primary heading-small">{id}</h2>
        </div>
      ) : null}
      <article className="col-start-6 col-span-8 flex flex-col gap-12">
        {children}
      </article>
    </article>
  );
}

function SectionHeading({ children }) {
  return (
    <article className="flex flex-col gap-8 w-full text-secondary body-default">
      {children}
    </article>
  );
}

function BodyBlock({ children }) {
  return (
    <article className="flex flex-col gap-4 w-full text-secondary body-default">
      {children}
    </article>
  );
}
function Image({ src }) {
  return <img src={src} className="fade-in w-full rounded-lg" />;
}
function ImageList({ children }) {
  return <ul className="flex gap-2">{children}</ul>;
}
function ImageSection({ children }) {
  return <section className="flex flex-col gap-2 w-full">{children}</section>;
}

export {
  Heading,
  SubHeading,
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
};
