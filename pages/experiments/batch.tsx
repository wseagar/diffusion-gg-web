import * as React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Helmet } from "../../components/Helmet";
import NSP from "./nsp.json";
import { MentionsInput, Mention } from "react-mentions";
import { generateKey } from "crypto";

const keys = Object.keys(NSP).sort();
const mentionKeys = keys.map((k) => ({ id: k, display: k }));

const styles = {
  control: {
    backgroundColor: "#fff",
    fontSize: 14,
    fontWeight: "normal",
  },

  "&multiLine": {
    control: {
      fontFamily: "monospace",
      minHeight: 63,
    },
    highlighter: {
      padding: 9,
      border: "1px solid transparent",
    },
    input: {
      padding: 9,
      border: "1px solid silver",
    },
  },

  "&singleLine": {
    display: "inline-block",
    width: 180,

    highlighter: {
      padding: 1,
      border: "2px inset transparent",
    },
    input: {
      padding: 1,
      border: "2px inset",
    },
  },

  suggestions: {
    list: {
      backgroundColor: "white",
      border: "1px solid rgba(0,0,0,0.15)",
      fontSize: 14,
    },
    item: {
      padding: "5px 15px",
      borderBottom: "1px solid rgba(0,0,0,0.15)",
      "&focused": {
        backgroundColor: "#CB80AD",
      },
    },
  },
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

export default function Page() {
  const [keyToShow, setKeyToShow] = React.useState("");

  const [value, setValue] = React.useState(
    "A @[animals](animals) in a forest, @[details](details), in the style of @[artist](artist), @[hd](hd)"
  );
  const [results, setResults] = React.useState([]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const getPrompt = (prompt: string) => {
    let newPrompt = prompt;
    for (const term of keys) {
      const terms = NSP[term];
      const tkey = `@[${term}](${term})`;
      const termCount = prompt.split(tkey).length - 1;
      for (let i = 0; i < termCount; i++) {
        const randomIndex = getRandomIntInclusive(0, terms.length - 1);
        newPrompt = newPrompt.replace(tkey, terms[randomIndex]);
      }
    }
    return newPrompt;
  };

  const generate = () => {
    // const r = /@\[(.*?)\]\((.*?)\)/g;
    // const matches = value.matchAll(r);
    const p = new Set();
    for (let i = 0; i < 1000; i++) {
      p.add(getPrompt(value));
    }
    setResults(Array.from(p));
  };
  return (
    <div className="page">
      <Helmet page="Batch Prompt Generator" />

      <Header />
      <Banner />
      <div className="content">
        <h1>Batch Prompt Generator</h1>
        <p>
          Type / to select a group of terms to substitute into your prompt
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "11fr 1fr", gap: "1rem" }}>
          <MentionsInput value={value} onChange={onChange} style={styles}>
            <Mention
              trigger="/"
              style={{
                backgroundColor: "#CB80AD",
                borderRadius: "4rem",
                paddingTop: "0.25rem",
                paddingBottom: "0.25rem",
              }}
              data={mentionKeys}
              onAdd={(...args) => console.log(args)}
            />
          </MentionsInput>
          <a style={{ justifySelf: "start" }} onClick={() => generate()}>
            <button>Generate</button>
          </a>
        </div>
        <div>
          {results.length > 0 && (
            <>
              <span
                className="discord-cta"
                style={{ cursor: "pointer" }}
                onClick={() => setResults([])}
              >
                {"Clear Results"}
              </span>
              {" | "}
              <span
                className="discord-cta"
                style={{ cursor: "pointer" }}
                onClick={() => navigator.clipboard.writeText(results.join("\n"))}
              >
                {"Copy Results"}
              </span>
              <div style={{ height: "500px", overflowY: "scroll", marginTop: "1rem", marginBottom: "1rem"}}>
                <pre>{results.join("\n")}</pre>
              </div>
            </>
          )}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          {keys.map((key) => {
            const values = NSP[key];
            return (
              <div
                className="card"
                key={key}
                style={{ display: "grid", gridTemplateColumns: "5fr 1fr" }}
              >
                <div>
                  {key} ({NSP[key].length})
                  <p style={{ color: "#5c5c5c" }}>
                    {keyToShow !== key && (
                      <>
                        {values.slice(0, 3).join(", ")},
                        <span
                          className="discord-cta"
                          style={{ cursor: "pointer" }}
                          onClick={() => setKeyToShow(key)}
                        >
                          {"see all"}
                        </span>
                      </>
                    )}
                    {keyToShow === key && (
                      <>
                        {values.join(", ")},
                        <span
                          className="discord-cta"
                          style={{ cursor: "pointer" }}
                          onClick={() => setKeyToShow("")}
                        >
                          {"hide"}
                        </span>
                      </>
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <p>
          If you want to try Stable Diffusion out for yourself, or have some ideas for other
          experiments we could run,
          <a href="https://discord.gg/ZaEJxW4rU6" target="_blank" rel="noreferrer">
            <span className="discord-cta">join our Discord!</span>
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
}
