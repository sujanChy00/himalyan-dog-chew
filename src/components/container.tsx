export const Container = ({
  className,
  ...rest
}: React.ComponentProps<"div">) => {
  return (
    <div className={`max-w-6xl mx-auto px-4 sm:px-6 ${className}`} {...rest} />
  );
};
