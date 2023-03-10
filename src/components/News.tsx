import VersionTwo from "../../news/v2_0.mdx";
import { createSignal } from "solid-js";

// This page is highly WIP, i have to release v2.0 today itself .
const [newsShown, setNews] = createSignal(false);

const blogs: any = [
  {
    heading: "NvChad v2.0 released!",
    details:
      "This release builds gets on with new UI features in our ui plugin & usage of lazy.nvim. Improvements in startuptime & cachifying our theme plugin,  base46 totally i.e it will now only be used to generate & compile hightlight groups!",
    component: <VersionTwo />,
    link: "v2_0",
  },
];

function News() {
  console.log(blogs);
  return (
    <div m="y-10 x-auto" px-3 max="w-[1000px]">
      {/* overview cards */}
      {!newsShown()
        ? (
          <div grid gap-10>
            {blogs.map((x) => {
              {/* card */}
              return (
                <div border="slate 1 dark:dark-4 solid" p-5 grid gap-5>
                  <h2 class="headingUnderline m-0" pb-5>{x.heading}</h2>
                  <p text-lg text-base class="m-0 p-0">{x.details}</p>

                  <button
                    bg-blue-6
                    text-white-1
                    dark:bg-blue-3
                    dark:text-dark-1
                    px-5
                    onclick={() => setNews(!newsShown())}
                  >
                    read more
                  </button>
                </div>
              );
            })}
          </div>
        )
        : <VersionTwo />}
    </div>
  );
}

export default News;
