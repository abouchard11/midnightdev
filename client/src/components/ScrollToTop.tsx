import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollToTop() {
  const [pathname] = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash;
    if (hash) {
      // Wait for DOM to be ready, then scroll to the element
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // No hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
