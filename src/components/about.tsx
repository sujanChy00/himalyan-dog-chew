export const About = () => {
  return (
    <div className="pr-10">
      <h2 className="text-2xl font-bold mb-4">What is Himalayan Cheese?</h2>
      <p className="text-gray-800 text-sm font-medium leading-relaxed">
        Himalayan Cheese is a traditional hard cheese made from yak and cow milk
        using time-honored methods.
      </p>
      <p className="text-gray-800 text-sm font-medium leading-relaxed mb-6">
        It is a natural treat that supports your dog's dental health and overall
        wellness.
      </p>
      <img
        src="/himalyan_yak.webp"
        alt="Himalayan mountains with yaks"
        className="rounded-xl w-full h-44 object-cover shadow"
      />
    </div>
  );
};
