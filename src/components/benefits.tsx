import { benefitsList } from "#/constants";
import { Container } from "./container";

export const Benefits = () => {
  return (
    <Container className="bg-brand rounded-2xl sm:rounded-3xl py-10 sm:py-12 px-4 sm:px-6 lg:px-8 shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
        {benefitsList.map((b, i) => (
          <section key={i} className="flex flex-col items-center gap-3">
            <div className="flex items-center justify-center bg-dark rounded-full size-16 sm:size-20 text-2xl">
              {b.icon}
            </div>

            <h3 className="font-bold text-base sm:text-lg">{b.title}</h3>

            <p className="text-gray-700 text-sm leading-relaxed max-w-xs">
              {b.description}
            </p>
          </section>
        ))}
      </div>
    </Container>
  );
};
