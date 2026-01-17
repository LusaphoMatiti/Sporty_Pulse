function About() {
  return (
    <>
      <section className="px-4">
        <h1 className="flex items-center justify-center gap-3 md:text-3xl font-bold sm:text-4xl sm:flex-wrap mb-10">
          About
          <span className="bg-primary p-4 rounded-lg  text-white dark:text-black">
            Sporty Pulse
          </span>
        </h1>

        <p className="mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground text-center">
          Sporty Pulse was created for professionals who want to stay fit but
          don’t have time for gyms, long commutes, or crowded workout spaces. We
          focus on <b>fitness accessories and recovery</b> tools that make it
          easier to work out at home. Simple gear. Practical tools. No
          complicated setups or wasted time. Whether you have 15 minutes before
          work or a short break in the evening, our products help you stay
          active, stretch, and recover—right where you are.
        </p>

        <h2 className="mt-16 flex items-center justify-center md:text-2xl font-bold sm:text-3xl mb-8">
          What We Believe
        </h2>

        <ul className="max-w-xl mx-auto space-y-4 text-muted-foreground text-lg">
          <li className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
            <span>Fitness should fit into your day, not take it over</span>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
            <span>You don’t need a full gym to stay consistent</span>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
            <span>Recovery matters just as much as the workout</span>
          </li>
        </ul>

        <p className="mt-12 max-w-2xl mx-auto text-center text-lg leading-8 text-muted-foreground">
          Sporty Pulse isn’t about extreme training or gym culture. It’s about
          helping busy people move more, feel better, and stay consistent on
          their own terms.
        </p>
      </section>
    </>
  );
}

export default About;
