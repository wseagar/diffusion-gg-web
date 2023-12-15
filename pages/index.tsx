import * as React from "react";
import { RotatingHeader } from "../components/rotating-header";
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
        <div className="splash">
          <div>
            <h1>
              <div>Create beautiful</div>
              <RotatingHeader />
              <div>from text</div>
            </h1>
            <p>
              Use <pre style={{ display: "inline" }}>/draw</pre> in Discord to create unique and
              original images from natural language.
            </p>
            <a href="https://discord.gg/CKhsF4bVuD">
              <button>Join the Discord</button>
            </a>
            {/* <a href="https://discord.com/api/oauth2/authorize?client_id=1012552500831866942&permissions=0&scope=applications.commands%20bot">
              <button>Connect to Discord</button>
            </a> */}
          </div>
          <div className="orb" />
        </div>
      </div>
      <div className="dark-section">
        <div className="content">
          <div className="how-works">
            <h3>Getting Started</h3>
            <div className="steps">
              <div className="step">
                <div className="explaination">
                  <div>
                    <h2>Connect to Discord</h2>
                    <p>
                      Allow the diffusion.gg bot to connect your server. This will allow your users
                      to start commanding it to generate art.
                    </p>
                    <a href="https://discord.com/api/oauth2/authorize?client_id=1012552500831866942&permissions=0&scope=applications.commands%20bot">
                      <button>Connect now</button>
                    </a>
                  </div>
                </div>

                <div className="step-n">1</div>

                <img src="/diffusion-1.png" alt="diffuse signup" className="img1" />
              </div>
              <div className="step">
                <img src="/diffusion-2.png" alt="blockchain" className="img1" />

                <div className="step-n">2</div>

                <div className="explaination">
                  <div>
                    <h2>Get Creative</h2>
                    <p>
                      Type /draw into Discord - and enter whatever you'd like to see - for example,
                      "a horse in space"
                    </p>
                  </div>
                </div>
              </div>
              <div className="step">
                <div className="explaination">
                  <div>
                    <h2>Wow!</h2>
                    <p>
                      Images will pop up in your Discord chat. You can use Style Modifiers to get
                      your creation looking amazing.
                    </p>
                  </div>
                </div>

                <div className="step-n">3</div>

                <img src="/diffusion-3.png" alt="blockchain" className="img1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="features">
          <img
            src="/dreamlookai-generated-image.png"
            className="mockup"
            style={{ width: "500px" }}
          />
          <div>
            <h2>Powered by Stable Diffusion</h2>
            <p>Stable Diffusion is a free and open source state of the art text-to-image model.</p>
          </div>
          <img
            src="/dreamlookai-generated-image-5.png"
            className="mockup"
            style={{ width: "500px" }}
          />

          <div>
            <h2>Get started for free!</h2>
            <p>Get started with 50 free images - plus five more every day.</p>
          </div>

          <div>
            <a href="https://discord.gg/CKhsF4bVuD">
              <button>Join the Discord</button>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="content">
        <h2 className="faq-header">Frequently Asked Questions</h2>
        <Faqs />
      </div> */}
      <Footer />
    </div>
  );
}
