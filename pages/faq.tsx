import * as React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { Helmet } from "../components/Helmet";
import { Faqs } from "../components/Faqs";

export default function Page() {
  return (
    <div className="page">
      <Helmet page="" />

      <Header />
      <Banner />
      <div className="content">
        <h1>Frequently asked questions</h1>
        <Faqs />
      </div>
      <Footer />
    </div>
  );
}
