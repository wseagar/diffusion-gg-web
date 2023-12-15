import * as React from "react";

export function Banner() {
  return (
    <a href="https://dreamlook.ai" target="_blank" rel="noreferrer">
      <div className="banner">
        <div className="content">
          Want to train your own model?
          <span className="discord-cta">Try dreamlook.ai</span>
          <div className="social discord" />
        </div>
      </div>
    </a>
  );
}

export function DreamlookBanner() {
  return (
    <a href="https://discord.gg/ZaEJxW4rU6" target="_blank" rel="noreferrer">
      <div className="banner">
        <div className="content">
          Want to try our bot? <span className="discord-cta">Join our Discord!</span>
          <div className="social discord" />
        </div>
      </div>
    </a>
  );
}
