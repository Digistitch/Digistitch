import { useLocation } from "react-router-dom";
import React from "react";

type IScrollProp = { children: React.ReactElement };

const ScrollToTop = ({ children }: IScrollProp) => {
  /** @param pathname */

  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return children || null;
};

export default ScrollToTop;
