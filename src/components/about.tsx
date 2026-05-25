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
          Crafted in the Himalayas using simple, natural ingredients —
          delivered from Japan to dogs and their people around the world.
        </span>
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      <article className="reveal lift bg-white rounded-3xl border border-stone-100 p-7 shadow-sm">
        <div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center text-2xl mb-5">
          🌱
        </div>
        <h3 className="font-display font-bold text-xl text-stone-900 mb-3">
          <span>Born in the Himalayas</span>
        </h3>
        <p className="text-stone-500 text-sm leading-relaxed">
          <span>
            Our chews trace their roots to an ancient tradition of yak and
            cow cheese making high in the Himalayas. Smoke-dried and
            hardened without additives, each chew is a long-lasting,
            all-natural treat your dog will love.
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
          <span>Simple. Natural. Honest.</span>
        </h3>
        <p className="text-stone-500 text-sm leading-relaxed">
          <span>
            No artificial preservatives, no fillers — just a handful of
            wholesome ingredients. We believe what goes into your dog's
            mouth matters, so we keep our recipe clean, transparent, and
            rooted in nature.
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
          <span>Japan-based, globally minded</span>
        </h3>
        <p className="text-stone-500 text-sm leading-relaxed">
          <span>
            Headquartered in Japan, we supply premium Himalayan dog chews
            to retailers and wholesale partners both domestically and
            worldwide. Whether you're shopping local or shipping
            internationally, quality stays the same.
          </span>
        </p>
      </article>
    </div>
  </div>
</section>
  );
};
