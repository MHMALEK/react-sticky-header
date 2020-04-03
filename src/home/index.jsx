import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types"; // ES6
import { _throttle } from "../utils/throttle";
import { CSSTransition } from "react-transition-group";

import "./style.css";
import "./transitions.css";

const StickyHeader = memo(({ children, triggerOn }) => {
  const [showFixedMenu, setShowFixedMenu] = useState(false);
  const [hideTopMenu, setHideTopMenu] = useState(false);
  const [scrollPassedTheOffset, setScrollPassedTheOffset] = useState(false);

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
      <CSSTransition
        in={showFixedMenu}
        timeout={600}
        classNames="react-sticky-fade__main_menu"
      >
        <div className="scrollable-space">
          <div className="main-menu menu__container">
            <div>first Menu</div>
          </div>

          <div className="fixed-menu menu__container">
            <div>second Menu</div>
          </div>
        </div>
      </CSSTransition>
    </header>
  );
});
StickyHeader.defaultProps = {
  triggerOn: 300,
};
StickyHeader.propTypes = {
  optionalElement: PropTypes.element,
  triggerOn: PropTypes.number,
};
export default StickyHeader;
