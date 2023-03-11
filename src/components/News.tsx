import { blogs } from "./news_comps/newsRoutes";
import { A } from "@solidjs/router";

function News() {
  return (
    <div m="y-5 xl:y-10 x-auto" px-3 max="w-[1700px]">
      {/* overview cards */}
      <div grid gap-10 class="md:grid-cols-2 2xl:grid-cols-3">
        {blogs.map((x) => {
          {/* card */}
          return (
            <div border="slate 0 dark:dark-4 solid" grid gap-5 shadow-xl bg='dark:dark-3'>
              <img src={`/news/v2.0.webp`} w-full rounded-t-lg/>

              <div grid gap-5 p-10 pt-5>
                <h2 class="headingUnderline m-0" pb-5>{x.heading}</h2>
                <p text-lg  class="m-0 p-0">{x.details}</p>

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
