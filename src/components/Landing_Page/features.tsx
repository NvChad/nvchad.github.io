const FeatureList = [
  {
    title: "Fast by default",
    icon: "i-fluent:rocket-20-regular text-yellow-2",
    description: ` 
        Blazing fast startup time as plugins, modules are lazy loaded wherever possible.
    `,
  },
  {
    title: "Beautiful UI",
    icon: "i-circum:palette",
    description: ` 
        NvChad provides a pretty UI while still embracing the CLI. Our UI plugins are well crafted!`,
  },
  {
    title: "Highly customizable",
    icon: "i-ion:cog-sharp text-emerald-3",
    description: ` 
        Default plugins, UI, configuration can easily be extended, disabled or overridden.
    `,
  },

  {
    title: "Update mechanism",
    icon: "i-line-md:downloading-loop",
    description: `NvChad uses lazy.nvim for package manager, which can be used for updating nvchad too.`,
  },
  {
    title: "Powered by Lua",
    icon: "i-file-icons:lua text-blue-3",
    description: ` 
        Configuration is written in Lua which integrates well with the Neovim
        lua api & lua plugins.
      `,
  },

  {
    title: "Prettiest themes",
    icon: "i-ph:paint-brush-broad text-red-3",
    description: ` 
        64 inbuilt beautifully ported & custom themes! All the theme colors are
        overridable too.
        `,
  },

  {
    title: "Lightweight",
    icon: "i-ph:feather text-purple-3",
    description: `
        The config is around 900 ~ LOC. The codebase is kept as clean as possible.
      `,
  },

  {
    title: "Inbuilt UI Plugins",
    icon: "i-lucide:package text-orange-3",
    description: `
          NvChad manages its own theme plugin and UI components for statusline, bufferline etc.
    `,
  },

  {
    title: "Ease of Use",
    icon: "i-octicon:smiley-16 text-green-3",
    description: `
      NvChad is used as a plugin, on top of which you make your own config!
    `,
  },
];

function Feature(props) {
  const { details } = props;

  return (
    <div class="grid gap-5 text-center justify-center rounded-2xl p-10 h-fit">
      <div w-fit bg-dark-3 text-white-1 rounded-full mx-auto shadow-md>
        <div class={`${details.icon}`} text="5xl xl:7xl" m-5 />
      </div>

      <div grid>
        <h2 mb-2 whitespace-nowrap>
          {details.title}
        </h2>
        <p text-lg dark:text-slate-4>
          {details.description}
        </p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section max="w-[1700px]" m-auto grid justify-center text-center my-20 px-5>
      <div grid md:grid-cols-2 lg:grid-cols-3>
        {FeatureList.map((feature, i) => (
          <Feature key={i} details={feature} />
        ))}
      </div>
    </section>
  );
}
