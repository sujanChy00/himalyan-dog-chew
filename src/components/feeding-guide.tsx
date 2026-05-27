import { useLanguage } from "#/context/language";

export const FeedingGuide = () => {
  const { t } = useLanguage();

  return (
    <div className="md:pl-10">
      <h2 className="text-2xl font-bold mb-4 whitespace-pre-line">
        {t("feeding_title")}
      </h2>

      <ul className="text-sm space-y-3 mb-5">
        <li className="flex items-start gap-1">
          <span className="text-lg">🐾</span>
          <span className="whitespace-pre-line">
            {t("feeding_bullet_1")}
          </span>
        </li>
        <li className="flex items-start gap-1">
          <span className="text-lg">🐾</span>
          <span className="whitespace-pre-line">
            {t("feeding_bullet_2")}
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
                {t("feeding_table_header")}
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-creamy-text font-semibold">
              <td className="px-2 py-1 border-r border-r-creamy-dark whitespace-pre-line">
                {t("feeding_toy_dog")}
              </td>
              <td className="px-2 py-1 text-right whitespace-nowrap">
                {t("feeding_amount_20")}
              </td>
            </tr>
            <tr className="border-b border-creamy-text font-semibold">
              <td className="px-2 py-1 border-r border-r-creamy-dark whitespace-pre-line">
                {t("feeding_small_dog")}
              </td>
              <td className="px-2 py-1 text-right whitespace-nowrap">
                {t("feeding_amount_40")}
              </td>
            </tr>
            <tr className="border-b border-creamy-text font-semibold">
              <td className="px-2 py-1 border-r border-r-creamy-dark whitespace-pre-line">
                {t("feeding_medium_dog")}
              </td>
              <td className="px-2 py-1 text-right whitespace-nowrap">
                {t("feeding_amount_60")}
              </td>
            </tr>
            <tr className="font-semibold">
              <td className="px-2 py-1 border-r whitespace-pre-line">
                {t("feeding_large_dog")}
              </td>
              <td className="px-2 py-1 text-right whitespace-nowrap">
                {t("feeding_amount_100")}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <p className="text-sm font-medium text-gray-800 mt-2 whitespace-pre-line">
        {t("feeding_disclaimer")}
      </p>
    </div>
  );
};
