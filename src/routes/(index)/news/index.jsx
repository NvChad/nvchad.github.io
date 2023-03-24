import { A } from "@solidjs/router";
import { news } from "./(items)/index";

function News() {
  return (
    <div m="y-5 xl:y-10 x-auto" px-3 max="w-[1700px]">
      {/* overview cards */}
      <div grid gap-5 class="md:grid-cols-2 2xl:grid-cols-3">
        {news.map((x) => {
          /* card */
          return (
            <div
              border="slate 0 dark:dark-4 solid"
              class="shadow-xl flex flex-col  gap-4 items-start"
              bg="dark:dark-3"
            >
              <img
                src={`/news/${x.cover}`}
                w-full
                rounded-t-lg
                loading="lazy"
              />

              <div h-full flex flex-col gap-10 justify-between p-10 pt-5>
                <div>
                  <h2 class="m-0" pb-5>
                    {x.heading}
                  </h2>
                  <p text-lg class="m-0 p-0">
                    {x.details}
                  </p>
                </div>

                <A href={x.link}>
                  <button
                    bg-blue-6
                    text-white-1
                    dark:bg-blue-3
                    dark:text-dark-1
                    px-5
                  >
                    read more
                  </button>
                </A>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default News;
