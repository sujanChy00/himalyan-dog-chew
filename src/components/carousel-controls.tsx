import { useEffect, useMemo, useState } from "react";

interface Props {
  dotsLength: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  animationDelay: number;
}
export const CarouselControls = ({
  dotsLength,
  activeIndex,
  setActiveIndex,
  animationDelay,
}: Props) => {
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const carouselArray = useMemo(
    () => Array.from({ length: dotsLength }),
    [dotsLength],
  );

  useEffect(() => {
    setIsAnimating(false);
    setProgress(0);

    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        setIsAnimating(true);
        setProgress(100);
      });

      return () => cancelAnimationFrame(raf2);
    });

    return () => cancelAnimationFrame(raf1);
  }, [activeIndex]);

  return (
    <div className="flex items-center gap-5">
      <div
        className="flex gap-2 items-center"
        role="tablist"
        aria-label="Carousel navigation"
      >
        {carouselArray.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-white w-[28px]" : "bg-white/40 w-2"
            }`}
          />
        ))}
      </div>

      <div className="h-[2px] w-32 bg-white/25 rounded-full overflow-hidden">
        <div
          className="h-full bg-white rounded-full"
          style={{
            width: `${progress}%`,
            transition: isAnimating
              ? `width ${animationDelay}ms linear`
              : "none",
          }}
        />
      </div>

      <div className="flex gap-2 ml-auto">
        <button
          onClick={() => {
            setActiveIndex((prev) => (prev === 0 ? dotsLength - 1 : prev - 1));
          }}
          className="w-9 h-9 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/25 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={() => {
            setActiveIndex((prev) => (prev >= dotsLength - 1 ? 0 : prev + 1));
          }}
          className="w-9 h-9 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/25 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
