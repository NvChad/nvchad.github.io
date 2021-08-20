import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import banner_img from "./main.png"
import "../css/index.css"; 
import logo from "./logo.png";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header>
      <div className="container">
        <div className = "banner_left">
          <img id="banner_title" src = {logo}/>  
          <Link
            className="button button--secondary button--lg installBtn banner_btn"
            to="/docs/Getting started/Setup">
               Install v1.0 
          </Link>
        </div>
       <div className = "banner">
          <img src={banner_img} id="banner_id" height = "600px" width = "100%"/>
        </div>  
      </div>
    </header>
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
