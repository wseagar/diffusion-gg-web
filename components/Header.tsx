import * as React from "react";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <div className="content header">
        <Link href="/" passHref={true}>
          <span className="header-logo" />
        </Link>

        <Link href="/experiments" passHref={true}>
          <button className="secondary no-mobile">Experiments</button>
        </Link>

        <a href="https://discord.gg/CKhsF4bVuD">
          <button>Join the Discord</button>
        </a>
        {/* <a
          href="https://discord.com/api/oauth2/authorize?client_id=1012552500831866942&permissions=0&scope=applications.commands%20bot"
          rel="noreferrer"
        >
          <button>Add to Discord</button>
        </a> */}
      </div>
    </header>
  );
}
