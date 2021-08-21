import React from "react"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import bannerImg from "./main.png"
import "../css/index.css"

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <div className="container home-wrapper">
          <div className="banner__left">
            <img className="banner__left--logo" src="/img/logo.svg" />
            <Link
              className="button button--secondary button--lg banner__left--btn"
              to="/getting-started/setup"
            >
              Install v1.0
            </Link>
          </div>
          <div className="banner__right">
            <img src={bannerImg} className="banner__right--screenshot" />
          </div>
        </div>
      </main>
    </Layout>
  )
}
