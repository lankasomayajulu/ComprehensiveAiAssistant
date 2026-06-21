import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop({ containerRef }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef?.current;
    if (!container) return;

    const handleScroll = () => {
      if (container.scrollTop > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    container.addEventListener("scroll", handleScroll);
    // Trigger check immediately in case content loaded already scrolled
    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [containerRef]);

  const scrollToTop = () => {
    if (containerRef?.current) {
      containerRef.current.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      title="Scroll to Top"
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}
