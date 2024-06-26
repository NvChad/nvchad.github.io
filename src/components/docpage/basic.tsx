const Basic = () => {
  return (
    <section grid="~ md:cols-2 gap3" un-children="3">
      <div grid="~ gap2" bg="red50 dark:dark3">
        <div
          grid="~ cols-3"
          items-center
          bg="red2 dark:dark4"
          p="3 y2"
          h-fit
        >
          <b />
          <span text="center lg" font="medium">
            NvChad
          </span>

          <a href="https://github.com/NvChad/NvChad" ml="auto" target="_blank">
            <button bg="!slate6" text="white1" rounded="full">
              <div class="i-ri:link text-sm" />
            </button>
          </a>
        </div>

        <ul>
          <li>This is the main repo for NvChad and its development.</li>

          <li>It contains all the plugins, options, mappings, autocmds</li>

          <li>
            All of its modules are in <code>/nvchad</code>
          </li>
        </ul>
      </div>

      <div grid="~ gap2" bg="green50 dark:dark3">
        <div
          grid="~ cols-3"
          items-center
          bg="green2 dark:dark4"
          p="3 y2"
          h-fit
        >
          <b />
          <span text="center lg" font="medium">
            Starter
          </span>

          <a href="https://github.com/NvChad/starter" ml="auto" target="_blank">
            <button bg="!slate6" text="white1" rounded="full">
              <div class="i-ri:link text-sm" />
            </button>
          </a>
        </div>

        <ul>
          <li>Config which uses the NvChad repo as a plugin.</li>

          <li>
            Users will be using the starter config as a base.
          </li>

          <li>
            Imports nvchad modules, ex: 
            <code>require("nvchad.options")</code>.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Basic;
