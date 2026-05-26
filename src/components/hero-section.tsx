import { Link } from "@tanstack/react-router";
import { Container } from "./container";

export const HeroSection = () => {
  return (
    <div className="bg-[url('/banner.webp')] pt-20 min-h-[90dvh] bg-bottom bg-cover bg-no-repeat">
      <Container className="min-h-[90dvh] flex items-center">
        <div>
          <p className="text-creamy-text text-sm sm:text-base md:text-xl font-bold tracking-widest uppercase mb-2">
            Himalayan Yak Milk Cheese
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight md:leading-20 lg:leading-24 text-gray-900 mb-4">
            Himalayan <br className="hidden sm:block" /> Cheese
          </h1>
          <p className="text-creamy-text font-bold text-base sm:text-lg md:text-xl mb-4">
            A natural, long-lasting treat <br className="hidden sm:block" />
            your dog will love.
          </p>
          <p className="text-gray-800 font-medium leading-relaxed mb-8 max-w-md text-sm sm:text-base md:text-lg">
            Made with yak and cow milk from the Himalayas, our natural hard
            cheese supports your dog's dental health and daily well-being.
          </p>

          <section className="flex flex-col sm:flex-row gap-4">
            <Link
              className="bg-dark text-secondary font-medium px-6 py-3 rounded-lg text-center w-full sm:w-auto"
              to="/products"
            >
              View Products
            </Link>

            <Link
              to="/products"
              className="bg-creamy font-medium px-6 py-3 rounded-lg w-full sm:w-auto text-center"
            >
              🛒 Buy Now
            </Link>
          </section>
        </div>
      </Container>
    </div>
  );
};
