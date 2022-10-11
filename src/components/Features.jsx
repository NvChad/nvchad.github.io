import React from "react";
import clsx from "clsx";

const FeatureList = [
  {
    title: "Fast by default",
    imgSrc: "/logos/rocket.png",
    description: (
      <>
        Blazing fast startup time as plugins are lazy loaded wherever possible;
        plugins will load only when needed.
      </>
    ),
  },
  {
    title: "Beautiful UI",
    imgSrc: "/logos/ui.png",
    description: (
      <>
        NvChad provides a pretty UI while still embracing the CLI; UI plugins are
        themed with visual elegance. 
      </>
    ),
  },
  {
    title: "Highly customizable",
    imgSrc: "/logos/cogs.png",
    description: (
      <>
       Default plugins, options, and themes can easily be disabled or overriden via the chadrc file. 
      </>
    ),
  },

  {
    title: "Update mechanism",
    imgSrc: "/logos/update.png",
    description: (
      <>
        Built-in update mechanism to stay up to date with the latest changes
        while preserving user configuration.
      </>
    ),
  },
  {
    title: "Powered by Lua",
    imgSrc: "/logos/lua.png",
    description: (
      <>
        Configuration is completely written in Lua which integrates well with the latest
        Lua API of Neovim and plugins written in Lua. 
      </>
    ),
  },
  {
    title: "Prettiest themes",
    imgSrc: "/logos/themes.png",
    description: (
      <>
        30+ inbuilt beautiful themes, say bye-bye to theme plugins!
      </>
    ),
  },
];

function Feature({ imgSrc, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={imgSrc} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className="features">
      <h1>Main Features</h1>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => <Feature key={idx} {...props} />)}
        </div>
      </div>
    </section>
  );
}
