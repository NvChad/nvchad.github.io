const toMeta = (v) =>
  Object.entries(v).map(([link, mod]) => ({
    link: "/news/" + link.replace(/^\.\/|\.mdx$/g, ""),
    ...mod.meta,
  }));

const news = toMeta(import.meta.glob("./*.mdx", { eager: true }));

export const meta = {
  title: "NvChad release blogs",
  desc: "List of NvChad version release news / guides",
};

function News() {
  return (
    <div m="y-5 xl:y-10 x-auto" px-3 max="w-[1700px]">
      {/* overview cards */}
      <div grid gap-5 class="md:grid-cols-2 2xl:grid-cols-4">
        {news.map((x) => (
          <div
            border="slate 0 dark:dark-4 solid"
            class="shadow-lg flex flex-col  gap-4 items-start"
            bg="dark:dark-3"
          >
            <img src={`/news/${x.cover}`} w-full rounded-t-lg loading="lazy" />

            <div h-full flex flex-col gap-4 justify-between p-10 pt-5>
              <div>
                <h2 class="m-0" pb-5>
                  {x.title}
                </h2>
                <p text-lg class="m-0 p-0">
                  {x.desc}
                </p>
              </div>

              <a href={x.link}>
                <button
                  bg-blue-6
                  text-white-1
                  dark:bg-blue-3
                  dark:text-dark-1
                  px-5
                >
                  Read More
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
