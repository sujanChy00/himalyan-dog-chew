import { SectionLabel } from "./section-label";

const data = [
  {
    icon: "🦴",
    title: "Cheese Stick",
    desc: "Our original hard chew — dense, long-lasting, and made from just four natural ingredients. Perfect for daily enrichment and keeping dogs happily occupied.",
    color: "from-amber-50 to-amber-100",
    animationDelay: "0s",
  },
  {
    icon: "🧀",
    title: "Cheese Chips",
    desc: "Bite-sized pieces of Himalayan cheese — great as a training reward or a lighter snack between longer chew sessions.",
    color: "from-yellow-50 to-yellow-100",
    animationDelay: ".08s",
  },
  {
    icon: "🥐",
    title: "Cheese Rusk",
    desc: "A crunchy, lighter-textured chew ideal for smaller breeds or dogs who prefer a softer bite. Same natural goodness, gentler on the jaw.",
    color: "from-orange-50 to-orange-100",
    animationDelay: ".16s",
  },
];

export const Products = () => {
  return (
    <section id="products" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="reveal mb-12">
          <SectionLabel className="mb-2">Lineup</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 mb-3">
            <span>Product lineup</span>
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl">
            <span>
              From long-lasting sticks to light daily snacks — a chew for every
              dog, every moment.
            </span>
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.map((d) => (
            <article
              key={d.title}
              style={{ transitionDelay: d.animationDelay }}
              className="reveal lift bg-white rounded-3xl border border-stone-100 overflow-hidden shadow-sm"
            >
              <div className="h-[140px] bg-linear-to-br from-amber-50 to-amber-100 flex items-center justify-center text-[3.5rem]">
                {d.icon}
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-stone-900 mb-2">
                  {d.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {d.desc}
                </p>
              </div>
            </article>
          ))}
          <article
            className="reveal lift bg-linear-to-br from-peak-600 to-peak-800 rounded-3xl border border-peak-700 overflow-hidden shadow-sm"
            style={{ transitionDelay: ".24s" }}
          >
            <div className="h-[140px] flex items-center justify-center text-[3.5rem] bg-linear-to-br from-peak-500 to-peak-700 text-white">
              🎁
            </div>
            <div className="p-5">
              <h3 className="font-display font-bold text-lg text-white mb-2">
                <span>Seasonal Gift Set</span>
              </h3>
              <p className="text-peak-100 text-sm leading-relaxed">
                <span>
                  Curated gift sets for special occasions — a thoughtful present
                  for the dogs and dog lovers in your life. Ask us about
                  seasonal and limited-edition bundles.
                </span>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};