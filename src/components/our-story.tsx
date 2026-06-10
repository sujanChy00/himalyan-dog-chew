import { useLanguage } from "#/context/language";
import { useState } from "react";
import { Container } from "./container";

export const OurStory = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"nepal" | "learning" | "japan" | "bridge" | "commitment">("nepal");

  const tabs = [
    { id: "nepal" as const, label: t("our_story_nepal_title") },
    { id: "learning" as const, label: t("our_story_learning_title") },
    { id: "japan" as const, label: t("our_story_japan_title") },
    { id: "bridge" as const, label: t("our_story_bridge_title") },
    { id: "commitment" as const, label: t("our_story_commitment_title") },
  ];

  return (
    <section id="our-story" className="py-16 sm:py-24 bg-brand/10">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-bold tracking-widest text-creamy-text uppercase bg-creamy/30 px-3 py-1 rounded-full">
            {t("our_story_title")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
            {t("our_story_subtitle")}
          </h2>
          <p className="text-gray-700 text-sm sm:text-base font-medium">
            {t("our_story_paragraph_1")} {t("our_story_paragraph_2")}
          </p>
        </div>

        {/* Interactive Tabs Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-5xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-dark text-secondary shadow-md scale-105"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-gray-100 max-w-4xl mx-auto min-h-[300px] flex flex-col justify-between">
          <div className="animate-fadeIn">
            {activeTab === "nepal" && (
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-950 flex items-center gap-2">
                  <span>🏔️</span> {t("our_story_nepal_title")}
                </h3>
                <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-semibold italic">
                  {t("our_story_nepal_p1")}
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {t("our_story_nepal_p2")}
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {t("our_story_nepal_p3")}
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {t("our_story_nepal_p4")}
                </p>
              </div>
            )}

            {activeTab === "learning" && (
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-950 flex items-center gap-2">
                  <span>📚</span> {t("our_story_learning_title")}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {t("our_story_learning_p1")}
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {t("our_story_learning_p2")}
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {t("our_story_learning_p3")}
                </p>
              </div>
            )}

            {activeTab === "japan" && (
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-950 flex items-center gap-2">
                  <span>🌸</span> {t("our_story_japan_title")}
                </h3>
                <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-semibold italic">
                  {t("our_story_japan_p1")}
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {t("our_story_japan_p2")}
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {t("our_story_japan_p3")}
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {t("our_story_japan_p4")}
                </p>
              </div>
            )}

            {activeTab === "bridge" && (
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-950 flex items-center gap-2">
                  <span>🤝</span> {t("our_story_bridge_title")}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {t("our_story_bridge_p1")}
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {t("our_story_bridge_p2")}
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {t("our_story_bridge_p3")}
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {t("our_story_bridge_p4")}
                </p>
              </div>
            )}

            {activeTab === "commitment" && (
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-950 flex items-center gap-2">
                  <span>💎</span> {t("our_story_commitment_title")}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {t("our_story_commitment_p1")}
                </p>
                <div className="bg-brand/10 p-4 sm:p-6 rounded-2xl border border-brand text-gray-800 text-sm sm:text-base whitespace-pre-line leading-relaxed font-semibold my-2">
                  {t("our_story_commitment_list")}
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {t("our_story_commitment_p2")}
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {t("our_story_commitment_p3")}
                </p>
              </div>
            )}
          </div>

          {/* Signature Block */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-dark text-secondary font-bold text-sm w-10 h-10 rounded-full flex items-center justify-center">
                JB
              </div>
              <div className="text-xs sm:text-sm whitespace-pre-line text-gray-800 leading-tight font-bold">
                {t("our_story_founder")}
              </div>
            </div>
            <div className="text-[10px] text-gray-500 font-semibold tracking-wider uppercase">
              Sierra Japan Enterprises LLC
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
