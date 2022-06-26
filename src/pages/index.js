import "../css/variables.css";
import "../css/style.css";
import "../css/components/home.css";

import React from "react";
import Layout from "@theme/Layout";

import Features from "../components/Features";
import Banner from "../components/Banner";
import Description from "../components/Description";

function Home() {
  return (
    <Layout description="An attempt to make neovim cli as functional as an IDE while being very beautiful, blazing fast">
      <main className="homepage">
        <Banner />
        <Description />
        <Features />
      </main>
    </Layout>
  );
}

export default function () {
  return <Home />;
}
