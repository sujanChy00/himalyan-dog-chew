export const Ingredients = () => {
  return (
    <div className="md:px-10 md:border-x md:border-x-creamy">
      <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
      <img src="/ingredients.webp" alt="ingredients" />
      <p className="text-gray-800 text-sm leading-relaxed font-medium">
        Yak milk, cow milk, lime juice, salt
      </p>
      <section className="my-4 border border-creamy-text p-3 rounded-lg">
        <table className="nutrition w-full text-xs border-collapse">
          <tr>
            <td className="py-0.5 font-medium">Crude Protein</td>
            <td className="py-0.5 font-semibold">: &nbsp;&nbsp;65.8% min</td>
          </tr>
          <tr>
            <td className="py-0.5 font-medium">Crude Fat</td>
            <td className="py-0.5 font-semibold">: &nbsp;&nbsp;14.7% min</td>
          </tr>
          <tr>
            <td className="py-0.5 font-medium">Crude Fiber</td>
            <td className="py-0.5 font-semibold">: &nbsp;&nbsp;4.4% max</td>
          </tr>
          <tr>
            <td className="py-0.5 font-medium">Moisture</td>
            <td className="py-0.5 font-semibold">: &nbsp;&nbsp;11.7% max</td>
          </tr>
          <tr>
            <td className="py-0.5 font-medium">Ash</td>
            <td className="py-0.5 font-semibold">: &nbsp;&nbsp;0.0% max</td>
          </tr>
          <tr>
            <td className="py-0.5 font-medium">Energy</td>
            <td className="py-0.5 font-semibold">: &nbsp;&nbsp;292kcal/100g</td>
          </tr>
        </table>
      </section>
      <section className="border border-creamy-text p-3 rounded-lg">
        <table className="nutrition w-full text-xs border-collapse">
          <tr>
            <td className="py-0.5 font-medium">Country of Origin</td>
            <td className="py-0.5 font-semibold">: &nbsp;&nbsp;Nepal</td>
          </tr>
          <tr>
            <td className="py-0.5 font-medium">Net Weight</td>
            <td className="py-0.5 font-semibold">: &nbsp;&nbsp;100g</td>
          </tr>
        </table>
      </section>
    </div>
  );
};
