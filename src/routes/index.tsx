import Hero from "~/components/Landing_Page/hero";
import Features from "~/components/Landing_Page/features";
import Footer from "~/components/Landing_Page/footer";

export const meta = {
  title: "NvChad",
  desc: "Blazing fast Neovim config providing solid defaults and a beautiful UI, enhancing your Neovim experience.",
};

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Footer />
    </>
  );
}

export default Home;
