import React from "react";
import Link from "@docusaurus/Link";
import { ArrowCircleDown } from "phosphor-react";

function BannerText() {
  return (
    <div className="bannerContent">
      <h1>
        Enhance your neovim workflow
      </h1>

      <p>
        Blazing fast neovim config providing solid defaults and beautiful UI
      </p>

      <div className="bannerBtns">
        <Link
          to="/quickstart/install#pre-requisites"
          style={{ textDecoration: "none" }}
        >
          <button className="banner_btn">
            <ArrowCircleDown size={23} />
            Install
          </button>
        </Link>

        <Link
          to="/quickstart/install#try-in-docker-container"
          style={{ textDecoration: "none" }}
        >
          <button className="banner_btn try_btn">
            <img src="/icons/docker.svg" />
            Test
          </button>
        </Link>
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div className="banner">
      <BannerText />

      <img
        className="bannerImg"
        src="/img/screenshots/main.webp"
        alt="NvChad banner screenshot"
      />
    </div>
  );
}

export default Banner;
