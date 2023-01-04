const FeatureList = [
  {
    title: "Fast by default",
    imgSrc: "/landingPage/rocket.png",
    description: (
      <>
        Blazing fast startup time as plugins are lazy loaded wherever possible;
        plugins will load only when needed.
      </>
    ),
  },
  {
    title: "Beautiful UI",
    imgSrc: "/landingPage/ui.png",
    description: (
      <>
        NvChad provides a pretty UI while still embracing the CLI; UI plugins
        are themed with visual elegance.
      </>
    ),
  },
  {
    title: "Highly customizable",
    imgSrc: "/landingPage/cogs.png",
    description: (
      <>
        Default plugins, options, and themes can easily be disabled or overriden
        via the chadrc file.
      </>
    ),
  },

  {
    title: "Update mechanism",
    imgSrc: "/landingPage/update.png",
    description: (
      <>
        Built-in update mechanism to stay up to date with the latest changes
        while preserving user configuration.
      </>
    ),
  },
  {
    title: "Powered by Lua",
    imgSrc: "/landingPage/lua.png",
    description: (
      <>
        Configuration is completely written in Lua which integrates well with
        the latest Lua API of Neovim and plugins written in Lua.
      </>
    ),
  },
  {
    title: "Prettiest themes",
    imgSrc: "/landingPage/themes.png",
    description: (
      <>30+ inbuilt beautiful themes, say bye-bye to theme plugins!</>
    ),
  },
];

function Feature(props: any) {
  const { details } = props;

  return (
    <div grid gap-5 text-center justify-center rounded-2xl p-10 bg-slate-1 dark:bg-tintBlack-1>
      <img
        src={details.imgSrc}
        alt={`${details.title}`}
        class="w-[20%] md:w-[45%] m-auto bg-slate-2 dark:bg-black-1 p-5 rounded-full"
      />

      <div grid>
        <h2 mb-2 whitespace-nowrap>{details.title}</h2>
        <p>{details.description}</p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section max-w-6xl m-auto grid justify-center text-center my-20 px-5>
      <div grid md:grid-cols-2 lg:grid-cols-3 gap-10>
        {FeatureList.map((feature, i) => <Feature key={i} details={feature} />)}
      </div>
    </section>
  );
}
