const Hero = () => {
  return (
    <section className="hero grid md:grid-cols-2 justify-center items-center gap-4">
      <div className="grid justify-center items-center gap-4 ">
        <h1 className="text-6xl text-center">Hi, I'm Adrian Guerra</h1>
        <p className="text-3xl text-center">
          A passionate learner turning designs into responsive, accessible web
          interfaces. I build with React, TailwindCSS, SASS, and a love for
          clean, user-friendly experiences.
        </p>
        <a
          className="rounded px-3 py-3 bg-primary w-[100px] text-center cursor-pointer hover:bg-secondary hover:text-dark mx-auto"
          href="#projects"
        >
          Projects
        </a>
      </div>
      <div className="">
        <img src="/images/responsive_design.svg" alt="monitor+phone"></img>
      </div>
    </section>
  );
};

export default Hero;
