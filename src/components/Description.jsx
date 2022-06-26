import React from "react";

export default function Description() {
  return (
    <div className="homePage_desc">
      <h1>What is it?</h1>

      <ul>
        <li>
          NvChad is a neovim config written in lua aiming to provide a base
          configuration with very beautiful UI and blazing fast startuptime
          (around 0.02 secs ~ 0.07 secs on hardware basis)
        </li>

        <li>
          Lazy loading is done 93% of the time meaning that plugins will not be
          loaded by default, they will be loaded only when required also at
          specific commands, vim events etc. This helps in lowering the
          startuptime, hence making the startuptime faster than usual
        </li>

        <li>
          NvChad isnt a framework! Its supposed to be used as a "base" config
          for the masses. It aims to provide a specfic collection of default
          plugins which seem to be very useful.
        </li>
      </ul>
    </div>
  );
}
