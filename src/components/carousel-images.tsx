interface Props {
  images: string[];
  activeIndex: number;
}

export const CarouselImages = ({ images, activeIndex }: Props) => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {images.map((image, index) => {
        const isActive = index === activeIndex;

        return (
          <img
            key={image}
            src={image}
            alt={`Slide ${index + 1}`}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "low"}
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover will-change-transform will-change-opacity"
            style={{
              opacity: isActive ? 1 : 0,
              transform: isActive ? "scale(1)" : "scale(1.06)",
              transition:
                "opacity 1200ms ease-in-out, transform 7000ms ease-out",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          />
        );
      })}
    </div>
  );
};
