import React, { FunctionComponent, useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const titles = [
  "Art",
  "Photos",
  "Cartoons",
  "Landscapes",
  "Anime",
  "Memes",
];

export const RotatingHeader: FunctionComponent = ({}) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (document.visibilityState !== "hidden") {
        setCurrent((current + 1) % titles.length);
      }
    }, 2000);

    return () => clearInterval(interval);
  });

  const title = titles[current];
  return (
    <TransitionGroup enter exit className="rotating">
      <CSSTransition key={current} timeout={700} classNames="item">
        <div className="item">{title}</div>
      </CSSTransition>
    </TransitionGroup>
  );
};
