export const FeedingGuide = () => {
  return (
    <div className="md:pl-10">
      <h2 className="text-2xl font-bold mb-4">Feding Guide</h2>

      <ul className="text-sm space-y-3 mb-5">
        <li className="flex items-start gap-1">
          <span className="text-lg">🐾</span>
          <span>
            Always supervise your dog while feeding. Feed 1 piece per day as a
            treat.
          </span>
        </li>
        <li className="flex items-start gap-1">
          <span className="text-lg">🐾</span>
          <span>
            When the piece becomes small, microwave for 1–2 minutes (depending
            on size) until it puffs up. Let it cool before giving to your dog.
          </span>
        </li>
      </ul>
      <section className="border border-creamy-text rounded-lg overflow-hidden">
        <table className="nutrition w-full text-xs border-collapse">
          <thead>
            <tr>
              <td
                className="bg-creamy text-center p-1 font-semibold border-b border-b-creamy-text"
                colSpan={2}
              >
                Daily Feeding Amount (Per Day)
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-creamy-text font-semibold">
              <td className="px-2 py-1 border-r border-r-creamy-dark">
                Toy Dogs (up to 5kg)
              </td>
              <td className="px-2 py-1 text-right">20g or less</td>
            </tr>
            <tr className="border-b border-creamy-text font-semibold">
              <td className="px-2 py-1 border-r border-r-creamy-dark">
                Small Dogs (5–10kg)
              </td>
              <td className="px-2 py-1 text-right">40g or less</td>
            </tr>
            <tr className="border-b border-creamy-text font-semibold">
              <td className="px-2 py-1 border-r border-r-creamy-dark">
                Medium Dogs (10–20kg)
              </td>
              <td className="px-2 py-1 text-right">60g or less</td>
            </tr>
            <tr className="font-semibold">
              <td className="px-2 py-1 border-r">Large Dogs (20kg and up)</td>
              <td className="px-2 py-1 text-right">100g or less</td>
            </tr>
          </tbody>
        </table>
      </section>
      <p className="text-sm font-medium text-gray-800 mt-2">
        Feeding amounts may vary depending on your dog's age, activity level,
        and health condition.
      </p>
    </div>
  );
};
