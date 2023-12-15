import React, { FunctionComponent, useLayoutEffect, useRef, useState } from "react";
import { Transition, TransitionStatus } from "react-transition-group";

export const Faqs: FunctionComponent = () => {
  return <></>;
};

const QuestionText: React.FunctionComponent<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  const paragraphs = answer.split("\n");
  return (
    <Question
      question={question}
      answer={paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    />
  );
};

const Question: React.FunctionComponent<{
  question: string;
  answer: React.ReactNode;
}> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={isOpen ? "is-open" : undefined}>
      <h4 onClick={() => setIsOpen(!isOpen)}>{question}</h4>
      <Transition in={isOpen} timeout={350}>
        {(state) => {
          return <Answer state={state}>{answer}</Answer>;
        }}
      </Transition>
    </div>
  );
};

const Answer: FunctionComponent<{ state: TransitionStatus }> = ({ state, children }) => {
  const ref = useRef<HTMLDivElement>();

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }
    if (state == "entering" || state == "exiting") {
      const isEnter = state == "entering";
      const intrinsicHeight = `${ref.current.clientHeight}px`;
      // I know, I know... but it's a nightmare otherwise
      ref.current.style.height = isEnter ? "0" : intrinsicHeight;
      requestAnimationFrame(() => {
        ref.current.style.height = isEnter ? intrinsicHeight : "0";
      });
    } else {
      ref.current.style.height = "";
    }
  }, [state]);

  if (state == "exited") {
    return null;
  }

  return (
    <div className="answer" ref={ref}>
      {children}
    </div>
  );
};
