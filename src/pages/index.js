import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '../components/HomepageFeatures';
import banner_img from "./main.png"
import "../css/index.css"; 
import logo from "./logo.png";

function HomepageHeader() {
  return (
    <div className="container">
      <div className="banner__left">
        <img className="banner__left--logo" src={logo}/>  
        <Link
          className="button button--secondary button--lg banner__left--btn"
          to="/docs/Getting started/Setup">
             Install v1.0 
        </Link>
      </div>
      <div className="banner__right">
        <img src={banner_img} className="banner__right--screenshot" />
      </div>  
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
