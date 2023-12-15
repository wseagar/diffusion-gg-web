import React, { FunctionComponent, useState } from "react";
import Colors from "./Colors";
import { LazyLoadImage, trackWindowScroll } from "react-lazy-load-image-component";

type Color = {
  r: number;
  g: number;
  b: number;
};

type NamedColor = {
  name: string;
  color: Color;
};

const colorWheel: NamedColor[] = [
  {
    name: "red",
    color: {
      r: 255,
      g: 0,
      b: 0,
    },
  },
  {
    name: "rose",
    color: {
      r: 255,
      g: 0,
      b: 127,
    },
  },
  {
    name: "magenta",
    color: {
      r: 255,
      g: 0,
      b: 255,
    },
  },

  {
    name: "violet",
    color: {
      r: 127,
      g: 0,
      b: 255,
    },
  },
  {
    name: "blue",
    color: {
      r: 0,
      g: 0,
      b: 255,
    },
  },

  {
    name: "azure",
    color: {
      r: 0,
      g: 127,
      b: 255,
    },
  },
  {
    name: "cyan",
    color: {
      r: 0,
      g: 255,
      b: 255,
    },
  },
  {
    name: "aquamarine",
    color: {
      r: 0,
      g: 255,
      b: 127,
    },
  },
  {
    name: "green",
    color: {
      r: 0,
      g: 255,
      b: 0,
    },
  },
  {
    name: "chartreuse",
    color: {
      r: 127,
      g: 255,
      b: 0,
    },
  },
  {
    name: "yellow",
    color: {
      r: 255,
      g: 255,
      b: 0,
    },
  },
  {
    name: "orange",
    color: {
      r: 255,
      g: 127,
      b: 0,
    },
  },
];

for (const c in Colors) {
  const colorData = Colors[c];
  const wheel = findClosestColorWheelColor(colorData as Color);
  colorData.wheel = wheel;
}

function distanceToColor(from: Color, to: Color) {
  const r_dist = (from.r - to.r) ** 2;
  const g_dist = (from.g - to.g) ** 2;
  const b_dist = (from.b - to.b) ** 2;
  return Math.sqrt(r_dist + g_dist + b_dist);
}

function findClosestColorWheelColor(color: Color) {
  let d = 9999999999999999;
  let closest = colorWheel[0];

  for (const wheel of colorWheel) {
    const distance = distanceToColor(color, wheel.color);
    if (distance < d) {
      d = distance;
      closest = wheel;
    }
  }
  return closest;
}

function componentToHex(c: number) {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r: number, g: number, b: number) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export const ColorExperiment: FunctionComponent = () => {
  const [colorFilter, setColorFilter] = useState<NamedColor | null>(colorWheel[0]);

  return (
    <>
      <div
        style={{
          display: "flex",
          cursor: "pointer",
          justifyContent: "space-around",
          width: "100%",
          alignContent: "center",
          flexWrap: "wrap",
        }}
      >
        {colorWheel.map((wheel, i) => {
          const hex = rgbToHex(wheel.color.r, wheel.color.g, wheel.color.b);
          const isActive = colorFilter?.name === wheel.name;
          return (
            <div
              key={i}
              onClick={() => {
                if (isActive) {
                  setColorFilter(null);
                } else {
                  setColorFilter(wheel);
                }
              }}
              style={{
                color: isActive ? "#FFFFFF" : hex,
                backgroundColor: isActive ? hex : undefined,
                padding: "1rem",
                borderRadius: "0.5rem",
              }}
            >
              {wheel.name}
            </div>
          );
        })}
      </div>
      <ColorDiffusion colorFilter={colorFilter} />
    </>
  );
};
const ColorDiffusion = ({ colorFilter }: { colorFilter: NamedColor }) => {
  return (
    <div id="color-diffusion">
      {Object.keys(Colors)
        .filter((color) => {
          const colorData = Colors[color];
          const wheel = colorData.wheel;
          if (colorFilter && colorFilter.name !== wheel.name) {
            return false;
          }
          return true;
        })
        .map((color) => {
          const colorData = Colors[color];

          return <ImageComponent key={color} color={color} colorData={colorData} />;
        })}
    </div>
  );
};
function ImageComponent({ color, colorData }): JSX.Element {
  const [hide, setHide] = useState(colorData.url.nsfw);
  return (
    <div
      className="color-container"
      style={{ borderColor: colorData.hex, backgroundColor: colorData.hex }}
    >
      {colorData.url?.uri ? (
        <>
          <LazyLoadImage
            key={color}
            className="color-img"
            style={{ filter: hide ? "blur(8px)" : "" }}
            src={colorData.url?.uri}
            alt={color}
            title={color}
            width="100%"
            height="100%"
            delayMethod="debounce"
          />

          <div className="color-middle">
            <div className="color-text">{color}</div>
            {colorData.url?.nsfw ? (
              <button className="secondary" style={{ color: "white", fontWeight: "bold"}} onClick={() => setHide((p) => !p)}>{hide ? "SHOW" : "HIDE"}</button>
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
