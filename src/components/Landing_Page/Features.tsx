const FeatureList = [
  {
    title: "Fast by default",
    icon: "i-fluent:rocket-20-regular text-red-3",
    description: (
      <>
        Blazing fast startup time as plugins are lazy loaded wherever possible;
        plugins will load only when needed.
      </>
    ),
  },
  {
    title: "Beautiful UI",
    icon: "i-circum:palette",
    description: (
      <>
        NvChad provides a pretty UI while still embracing the CLI; UI plugins
        are themed with visual elegance.
      </>
    ),
  },
  {
    title: "Highly customizable",
    icon: "i-ion:cog-sharp text-emerald-3",
    description: (
      <>
        Default plugins, options, and themes can easily be disabled or overriden
        via the chadrc file.
      </>
    ),
  },

  {
    title: "Update mechanism",
    icon: "i-line-md:downloading-loop !mb-1",
    description: (
      <>
        Update mechanism via git to stay up to date with the latest changes
        while preserving user configuration.
      </>
    ),
  },
  {
    title: "Powered by Lua",
    icon: "i-simple-icons:lua text-blue-3",
    description: (
      <>
        Configuration is completely written in Lua which integrates well with
        the latest Lua API of Neovim and plugins written in Lua.
      </>
    ),
  },
  {
    title: "Prettiest themes",
    icon: "i-ph:paint-brush-broad text-lime-2",
    description: (
      <>
        56+ inbuilt beautifully ported & custom themes, say bye-bye to theme
        plugins! All the theme colors are overridable via user config.
      </>
    ),
  },
];

function Feature(props: any) {
  const { details } = props;

  return (
    <div class="grid gap-5 text-center justify-center rounded-2xl p-10">
      <div w-fit bg-dark-3 text-white-1 rounded-full mx-auto shadow-md>
        <div
          class={`${details.icon}`}
          text-7xl
          m-5
        />
      </div>

      <div grid>
        <h2 mb-2 whitespace-nowrap>{details.title}</h2>
        <p>{details.description}</p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section max="w-[1700px]" m-auto grid justify-center text-center my-20 px-5>
      <div grid md:grid-cols-2 lg:grid-cols-3 gap-10>
        {FeatureList.map((feature, i) => <Feature key={i} details={feature} />)}
      </div>
    </section>
  );
}
