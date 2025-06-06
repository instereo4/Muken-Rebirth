import { useEffect, useRef, useState } from "react";

export default function useAnimateOnScrollOnce(
  className = "fadeInUp",
  threshold = 0.2
) {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          el.classList.remove("hidden-before-animate");
          el.classList.add(className);
          setHasAnimated(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [hasAnimated, className, threshold]);

  return ref;
}
