import React from "react"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import bannerImg from "../../static/img/main.png"

import "../css/components/home.css"

function Banner() {
  return (
    <div className="container banner">
      <div className="banner_left">
        <img className="banner_logo" src="/img/logo.svg" alt="Nvchad logo" />
        <Link
          className="button button--secondary button--lg install_btn"
          to="/getting-started/setup"
        >
          Install v1.0
        </Link>
      </div>
      <div className="banner__right">
        <img
          src={bannerImg}
          className="banner__right--screenshot"
          alt="NvChad banner screenshot"
        />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <Layout description="An attempt to make neovim cli as functional as an IDE while being very beautiful, blazing fast">
      <main className="homepage">
        <Banner />
      </main>
    </Layout>
  )
}
