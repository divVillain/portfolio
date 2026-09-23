export default function Footer() {
  return (
    <footer className="main-footer w-full background-primary h-[60vh] flex items-end relative p-8 z-[-99]">
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat rounded-lg"
        style={{
          backgroundImage: `url(/home/footer-bg.jpg)`,
        }}
      >
        <div className="flex flex-col ietms-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:w-auto w-full max-w-[75vw] gap-8 md:gap-2">
          <span className="display-large text-primary text-center">
            Let's{" "}
            <strong className="display-decorative-large-italic">connect</strong>
          </span>
          <div className="flex md:justify-between flex-col md:flex-row w-full h-auto shrink-0 items-center text-primary">
            <div className="socials flex gap-4 body-default">
              <span>+34 675 030 133</span>
            </div>
            <a href="" className="text-primary body-default">
              jaime01glez@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
