import React, { useRef } from "react";
import Header from "./Header";
import StatusBar from "./StatusBar";
import ScrollToTop from "./ScrollToTop";

export default function Layout({ children, user, currentScreen, navigateTo, onLogout }) {
  const scrollContainerRef = useRef(null);

  return (
    <div className="app-shell">
      <Header
        user={user}
        currentScreen={currentScreen}
        navigateTo={navigateTo}
        onLogout={onLogout}
      />
      
      <main className="app-main">
        <div className={currentScreen === "project" ? "project-scroll-container" : "scroll-container"} ref={scrollContainerRef}>
          {children}
        </div>
      </main>
      
      <ScrollToTop containerRef={scrollContainerRef} />
      <StatusBar user={user} />
    </div>
  );
}
