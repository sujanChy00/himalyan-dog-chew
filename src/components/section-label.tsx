import React from "react";

export const SectionLabel = ({
  className,
  ...rest
}: React.ComponentProps<"h6">) => {
  return (
    <h6
      className={`text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-peak-500 mb-2 ${className}`}
      {...rest}
    />
  );
};
