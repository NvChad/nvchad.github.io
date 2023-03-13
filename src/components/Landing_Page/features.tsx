const FeatureList = [
  {
    title: "Fast by default",
    icon: "i-fluent:rocket-20-regular text-yellow-2",
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
        Default plugins, UI, configuration can easily be disabled or overriden
        via the chadrc file.
      </>
    ),
  },

  {
    title: "Update mechanism",
    icon: "i-line-md:downloading-loop",
    description: (
      <>
        Update mechanism via git to stay up to date with the latest changes
        while preserving user configuration.
      </>
    ),
  },
  {
    title: "Powered by Lua",
    icon: "i-file-icons:lua text-blue-3",
    description: (
      <>
        Configuration is written in Lua which integrates well with
        the Neovim lua api & lua plugins.
      </>
    ),
  },
  {
    title: "Prettiest themes",
    icon: "i-ph:paint-brush-broad text-red-3",
    description: (
      <>
        57 inbuilt beautifully ported & custom themes! All the theme colors are overridable via user config.
      </>
    ),
  },
];

function Feature(props: any) {
  const { details } = props;

  return (
    <div class="grid gap-5 text-center justify-center rounded-2xl p-10 h-fit">
      <div w-fit bg-dark-3 text-white-1 rounded-full mx-auto shadow-md>
        <div
          class={`${details.icon}`}
          text="5xl xl:7xl"
          m-5
        />
      </div>

      <div grid>
        <h2 mb-2 whitespace-nowrap>{details.title}</h2>
        <p text-lg dark:text-slate-4>{details.description}</p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section max="w-[1700px]" m-auto grid justify-center text-center my-20 px-5>
      <div grid md:grid-cols-2 lg:grid-cols-3>
        {FeatureList.map((feature, i) => <Feature key={i} details={feature} />)}
      </div>
    </section>
  );
}
