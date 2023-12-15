import * as React from "react";
import { RotatingHeader } from "../components/rotating-header";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { Helmet } from "../components/Helmet";
import { Faqs } from "../components/Faqs";
import Link from "next/link";

export default function Page() {
  return (
    <div className="page">
      <Helmet page="" />

      <Header />
      <Banner />
      <div className="content">
        <h1>Experiments</h1>
        <ul>
          {/* <li>
            <Link href="/experiments/color" passHref={true}>
              <button className="secondary" style={{ fontSize: "18px" }}>
                Color Diffusion
              </button>
            </Link>
          </li> */}
          <li>
            <Link href="/experiments/batch" passHref={true}>
              <button className="secondary" style={{ fontSize: "18px" }}>
                Batch Prompt Generator
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
