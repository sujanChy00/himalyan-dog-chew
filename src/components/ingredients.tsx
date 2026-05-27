import { useLanguage } from "#/context/language";

export const Ingredients = () => {
  const { t } = useLanguage();

  return (
    <div className="md:px-10 md:border-x md:border-x-creamy">
      <h2 className="text-2xl font-bold mb-4 whitespace-pre-line">
        {t("ingredients_title")}
      </h2>
      <img src="/ingredients.webp" alt="ingredients" />
      <p className="text-gray-800 text-sm leading-relaxed font-medium mt-2 whitespace-pre-line">
        {t("ingredients_list")}
      </p>
      <section className="my-4 border border-creamy-text p-3 rounded-lg">
        <table className="nutrition w-full text-xs border-collapse">
          <tbody>
            <tr>
              <td className="py-0.5 font-medium">{t("ingredients_protein")}</td>
              <td className="py-0.5 font-semibold">: &nbsp;&nbsp;{t("ingredients_protein_val")}</td>
            </tr>
            <tr>
              <td className="py-0.5 font-medium">{t("ingredients_fat")}</td>
              <td className="py-0.5 font-semibold">: &nbsp;&nbsp;{t("ingredients_fat_val")}</td>
            </tr>
            <tr>
              <td className="py-0.5 font-medium">{t("ingredients_fiber")}</td>
              <td className="py-0.5 font-semibold">: &nbsp;&nbsp;{t("ingredients_fiber_val")}</td>
            </tr>
            <tr>
              <td className="py-0.5 font-medium">{t("ingredients_moisture")}</td>
              <td className="py-0.5 font-semibold">: &nbsp;&nbsp;{t("ingredients_moisture_val")}</td>
            </tr>
            <tr>
              <td className="py-0.5 font-medium">{t("ingredients_ash")}</td>
              <td className="py-0.5 font-semibold">: &nbsp;&nbsp;{t("ingredients_ash_val")}</td>
            </tr>
            <tr>
              <td className="py-0.5 font-medium">{t("ingredients_energy")}</td>
              <td className="py-0.5 font-semibold">: &nbsp;&nbsp;{t("ingredients_energy_val")}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="border border-creamy-text p-3 rounded-lg">
        <table className="nutrition w-full text-xs border-collapse">
          <tbody>
            <tr>
              <td className="py-0.5 font-medium">{t("ingredients_country_origin")}</td>
              <td className="py-0.5 font-semibold">: &nbsp;&nbsp;{t("ingredients_nepal_val")}</td>
            </tr>
            <tr>
              <td className="py-0.5 font-medium">{t("ingredients_net_weight")}</td>
              <td className="py-0.5 font-semibold">: &nbsp;&nbsp;{t("ingredients_weight_val")}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};
