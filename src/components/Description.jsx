import React from "react";

export default function Description() {
  return (
    <div className="homePage_desc">
      <h1>What is it?</h1>

      <ul>
        <li>
          NvChad is a Neovim configuration written in Lua aiming to provide a base
          configuration with a beautiful UI and blazing fast startup time
          (around 0.02 secs ~ 0.07 seconds on the basis of hardware)
        </li>

        <li>
          Lazy loading is done 93% of the time, meaning that plugins will not be
          loaded by default. They are loaded only when required at
          specific commands, Vim events, etc. This helps in lowering the
          startup time, making it faster than usual
        </li>

        <li>
          NvChad is not a framework! It is supposed to be used as a "base" configuration
          for the masses. It aims to provide a specific collection of default
          plugins which users find to be very useful.
        </li>
      </ul>
    </div>
  );
}
