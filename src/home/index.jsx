import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types"; // ES6
import { _throttle } from "../utils/throttle";
import { CSSTransition } from "react-transition-group";

import "./style.css";

const StickyHeader = memo(({ children, triggerOn }) => {
  const [showFixedMenu, setShowFixedMenu] = useState(false);

  const handleScroll = () => {
    let scrollTop = window.scrollY;
    if (scrollTop > triggerOn) {
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
    <header className="react-stiky-header">
      <div className="react-stiky-header__container">
        <CSSTransition
          in={showFixedMenu}
          timeout={{
            enter: 1000,
            exit: 1000,
          }}
          classNames="height"
        >
          <div className="scrollableSapce">
            <div className="fullMenuWrapper">
              <CSSTransition
                in={!showFixedMenu}
                timeout={{
                  enter: 1000,
                  exit: 1000,
                }}
                classNames="fade-new"
              >
                <div>dsas</div>
              </CSSTransition>
              <CSSTransition
                in={!showFixedMenu}
                timeout={{
                  enter: 600,
                  exit: 300,
                }}
                classNames="point"
              >
                <div>dsas</div>
              </CSSTransition>
              <CSSTransition
                in={!showFixedMenu}
                timeout={{
                  enter: 1000,
                  exit: 1000,
                }}
                classNames="fade-new"
              >
                <div className="actionButtonWrapper"></div>
              </CSSTransition>
            </div>
          </div>
        </CSSTransition>
      </div>
    </header>
  );
});
StickyHeader.defaultProps = {
  triggerOn: 300,
};
StickyHeader.PropTypes = {
  optionalElement: PropTypes.element,
  triggerOn: PropTypes.bool,
};
export default StickyHeader;
