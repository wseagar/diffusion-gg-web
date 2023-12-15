import React, { FunctionComponent, useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const titles = [
  "Loading your images...",
  "Sometimes this can take a while",
  "We're working on it",
  "I hope you came up with a good prompt!",
  "Crafting your masterpiece...",
  "**AI intensifies**",
];

export const RotatingLoader: FunctionComponent = ({}) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (document.visibilityState !== "hidden") {
        setCurrent((current + 1) % titles.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  });

  const title = titles[current];
  return (
    <TransitionGroup enter exit className="rotating">
      <CSSTransition key={current} timeout={1000} classNames="item">
        <div className="item-loader">{title}</div>
      </CSSTransition>
    </TransitionGroup>
  );
};
