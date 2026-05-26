import { Link } from "@tanstack/react-router";
import { Container } from "./container";

export const HeroSection = () => {
  return (
    <div className="bg-[url('/banner.webp')] pt-20 min-h-[90dvh] bg-bottom bg-cover bg-no-repeat">
      <Container className="min-h-[90dvh] flex items-center">
        <div>
          <p className="text-creamy-text text-xl font-bold text tracking-widest uppercase mb-2">
            Himalayan Yak Milk Cheese
          </p>
          <h1 className="text-8xl font-extrabold leading-24 text-gray-900 mb-4">
            Himalyan <br /> Cheese
          </h1>
          <p className="text-creamy-text font-bold text-xl mb-4">
            A natural, long-lasting treat <br /> your dog will love.
          </p>
          <p className="text-gray-800 font-medium leading-relaxed mb-8 max-w-sm text-lg">
            Made with yak and cow milk from the Himalayas, our natural hard
            cheese supports your dog's dental health and daily well-being.
          </p>
          <section className="flex gap-4">
            <Link
              className="bg-dark text-secondary font-medium px-4 py-2 rounded-lg"
              to="/products"
            >
              View Products
            </Link>
            <button className="bg-creamy font-medium px-4 py-2 rounded-lg">
              🛒 Buy Now
            </button>
          </section>
        </div>
      </Container>
    </div>
  );
};
