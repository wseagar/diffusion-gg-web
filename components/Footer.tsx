import * as React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <div className="dark-section footer">
        <div className="content">
          <div>
            <a href="https://discord.gg/ZaEJxW4rU6" target="_blank" rel="noreferrer">
              <div className="social discord" />
            </a>
          </div>
          <div>
            <div className="logo" />
            <div className="notes">
              <Link href="/licence">Stable Diffusion Licence</Link>
              <div />
              <Link href="/privacy-policy">Privacy Policy</Link>
              <div />

              <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
              <div />
              <p>Copyright © 2022 Diffusion.gg Ltd. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
