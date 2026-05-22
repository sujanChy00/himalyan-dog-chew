import { SectionLabel } from "./section-label";

export const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="reveal mb-12">
          <SectionLabel>Our Story</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 mb-3">
            <span>About the brand</span>
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl">
            <span>
              Use this area for your origin story, product promise, and brand
              positioning.
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <article className="reveal lift bg-white rounded-3xl border border-stone-100 p-7 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center text-2xl mb-5">
              🌱
            </div>
            <h3 className="font-display font-bold text-xl text-stone-900 mb-3">
              <span>Origin story</span>
            </h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              <span>
                Introduce the idea behind the chew and why it was created for
                dogs.
              </span>
            </p>
          </article>
          <article
            className="reveal lift bg-white rounded-3xl border border-stone-100 p-7 shadow-sm"
            style={{ transitionDelay: ".1s" }}
          >
            <div className="w-12 h-12 rounded-2xl bg-peak-50 flex items-center justify-center text-2xl mb-5">
              🤝
            </div>
            <h3 className="font-display font-bold text-xl text-stone-900 mb-3">
              <span>Natural promise</span>
            </h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              <span>
                Highlight simple ingredients, careful production, and a
                trustworthy brand tone.
              </span>
            </p>
          </article>
          <article
            className="reveal lift bg-white rounded-3xl border border-stone-100 p-7 shadow-sm"
            style={{ transitionDelay: ".2s" }}
          >
            <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-2xl mb-5">
              🌏
            </div>
            <h3 className="font-display font-bold text-xl text-stone-900 mb-3">
              <span>Global and local</span>
            </h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              <span>
                Show that the brand can speak to both worldwide customers and
                Japanese shoppers.
              </span>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
