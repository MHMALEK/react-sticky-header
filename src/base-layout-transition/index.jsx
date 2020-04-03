import React, { memo, useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { _throttle } from "utils/throttle";
import "./style.css";
import "./transitions.css";

const BaseLayoutWithTransiition = memo(({ children }) => {
  const [showFixedMenu, setShowFixedMenu] = useState(false);

  const handleScroll = () => {
    let scrollTop = window.scrollY;
    if (scrollTop > 10) {
      setShowFixedMenu(true);
    } else {
      setShowFixedMenu(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", _throttle(handleScroll, 10));
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <CSSTransition
        in={showFixedMenu}
        timeout={{
          enter: 1000,
          exit: 1000,
        }}
        classNames="shadow-title"
      ></CSSTransition>
      <CSSTransition
        in={showFixedMenu}
        timeout={{
          enter: 1000,
          exit: 1000,
        }}
        classNames="fade-title"
      ></CSSTransition>
    </>
  );
});

export default BaseLayoutWithTransiition;
