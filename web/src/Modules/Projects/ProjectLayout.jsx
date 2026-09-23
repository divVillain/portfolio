export default function ProjectLayout({ children }) {
  return (
    <section className="w-full text-[16px] bg-[#161616] pb-40 flex flex-col gap-20 items-center text-secondary p-2 md:p-0">
      <div className="p-2 w-full flex flex-col gap-[120px] items-center relative">
        {children}
      </div>
    </section>
  );
}
