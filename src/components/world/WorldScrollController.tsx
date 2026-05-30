import { useEffect } from "react";

export function WorldScrollController() {
  useEffect(() => {
    const updateScroll = () => {
      const height = Math.max(
        document.body.scrollHeight - window.innerHeight,
        1,
      );
      const progress = Math.min(Math.max(window.scrollY / height, 0), 1);

      document.documentElement.style.setProperty(
        "--world-scroll-progress",
        progress.toString(),
      );
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  return null;
}
