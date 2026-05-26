import { benefitsList } from "#/constants";
import { Container } from "./container";

export const Benefits = () => {
  return (
    <Container className="bg-brand rounded-3xl mt-10 py-12 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
      {benefitsList.map((b, i) => (
        <section key={i} className="flex flex-col items-center gap-2">
          <div className="flex items-center justify-center bg-dark rounded-full size-20">
            {b.icon}
          </div>
          <h3 className="font-bold text-lg">{b.title}</h3>
          <p className="text-gray-700 text-sm leading-snug">{b.description}</p>
        </section>
      ))}
    </Container>
  );
};
