import { About } from "./about";
import { Container } from "./container";
import { FeedingGuide } from "./feeding-guide";
import { Ingredients } from "./ingredients";

export const Info = () => {
  return (
    <Container className="grid grid-cols-1 md:gap-0 gap-10 md:grid-cols-3 mt-20">
      <About />
      <Ingredients />
      <FeedingGuide />
    </Container>
  );
};
