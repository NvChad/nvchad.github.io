import React from "react";
import clsx from "clsx";

const FeatureList = [
  {
    title: "Fast by default",
    imgSrc: "/logos/rocket.png",
    description: (
      <>
        Blazing fast startuptime as plugins are lazy loaded wherever possible,
        plugins will load only when needed.
      </>
    ),
  },
  {
    title: "Beautiful UI",
    imgSrc: "/logos/ui.png",
    description: (
      <>
        NvChad provides pretty UI while still embracing the cli, UI plugins are
        themed perfectly to the fullest!
      </>
    ),
  },
  {
    title: "Highly customizable",
    imgSrc: "/logos/cogs.png",
    description: (
      <>
        The defaults can be disabled & overriden! Build your own config on the
        top of NvChad while still using its features
      </>
    ),
  },

  {
    title: "Update mechanism",
    imgSrc: "/logos/update.png",
    description: (
      <>
        Builtin update mechanism to stay update with the latest changes &
        preserves user configs and stable.
      </>
    ),
  },
  {
    title: "Powered by Lua",
    imgSrc: "/logos/lua.png",
    description: (
      <>
        Config is completely written lua which integrates well with the latest
        lua API of neovim and plugins written in lua
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
