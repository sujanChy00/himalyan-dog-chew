import { Link } from "@tanstack/react-router";
import { Container } from "./container";

export const OurStory = () => {
  return (
    <div className="my-20 relative py-14">
      <div className="absolute inset-0 mix-blend-darken bg-[url(/our_story_banner.webp)] bg-center bg-cover" />
      <Container className="relative z-20">
        <h2 className="text-3xl font-bold mb-5">Our story</h2>
        <div className="max-w-sm font-semibold">
          <p className="text-sm leading-relaxed mb-4 text-gray-800">
            Born in the pure environment of the Himalayas, our cheese is made
            using traditional techniques passed down through generations.
          </p>
          <p className="text-sm text-gray-800 leading-relaxed mb-8">
            We believe that your dog's health and happiness come first, and we
            are committed to delivering the best natural treats.
          </p>
        </div>
        <Link
          to="/our-story"
          className="font-semibold rounded-lg bg-dark text-white px-4 py-2"
        >
          Learn Our Story
        </Link>
      </Container>
    </div>
  );
};
