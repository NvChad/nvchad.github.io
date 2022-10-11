import React from "react";
import Link from "@docusaurus/Link";

function BannerText() {
  return (
    <div className="bannerContent">
      <h1>
        Enhance your Neovim workflow
      </h1>

      <p>
        Blazing fast Neovim config providing solid defaults and a beautiful UI
      </p>

      <div className="bannerBtns">
        <Link
          to="/quickstart/install#pre-requisites"
          style={{ textDecoration: "none" }}
        >
          <button className="banner_btn">
           <img src="/icons/install.svg" />
            Install
          </button>
        </Link>

        <Link
          to="/quickstart/install#try-in-docker-container"
          style={{ textDecoration: "none" }}
        >
          <button className="banner_btn">
            <img src="/icons/docker.svg" />
            Docker
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
