import { useState } from "react";
import { BarChart3, TrendingUp, Users, AlertOctagon } from "lucide-react";

interface StatisticsSectionProps {
  language: "id" | "en";
}

const StatisticsSection = ({ language }: StatisticsSectionProps) => {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const content = {
    id: {
      badge: "Data & Fakta",
      title: "Angka Tidak Berbohong",
      subtitle: "Ini bukan opini. Ini adalah data dari penelitian dan statistik resmi.",
      source: "Sumber",
      comparisonTitle: "Perbandingan Risiko Kecelakaan",
      comparisonSubtitle: "Dibandingkan dengan distraksi lain, merokok adalah yang paling berbahaya",
      risk: "risiko",
      mostDangerous: "PALING BERBAHAYA",
      factLabel: "Fakta:",
      factText1: "Merokok sambil berkendara",
      factText2: "hampir 2x lebih berbahaya",
      factText3: "dari main handphone!",
      stats: [
        {
          value: "23x",
          label: "Lebih Mungkin Kecelakaan",
          description: "Pengemudi yang merokok memiliki risiko kecelakaan 23 kali lebih tinggi dibanding yang fokus.",
          source: "Studi Journal of Transport & Health, 2021",
        },
        {
          value: "70 Juta",
          label: "Perokok Aktif di Indonesia",
          description: "Indonesia adalah salah satu negara dengan jumlah perokok terbanyak di dunia.",
          source: "Kementerian Kesehatan RI, 2023",
        },
        {
          value: "5 Detik",
          label: "Rata-rata Waktu Menyalakan Rokok",
          description: "5 detik cukup untuk menempuh lebih dari 100 meter pada kecepatan 80 km/jam.",
          source: "National Highway Traffic Safety Administration",
        },
        {
          value: "3 Jenis",
          label: "Distraksi Sekaligus",
          description: "Merokok menyebabkan distraksi visual, manual, dan kognitif secara bersamaan.",
          source: "AAA Foundation for Traffic Safety",
        },
      ],
      comparison: [
        { activity: "Merokok", risk: 23 },
        { activity: "Main HP", risk: 12 },
        { activity: "Mabuk", risk: 7 },
        { activity: "Mengantuk", risk: 4 },
      ],
    },
    en: {
      badge: "Data & Facts",
      title: "Numbers Don't Lie",
      subtitle: "This is not an opinion. This is data from research and official statistics.",
      source: "Source",
      comparisonTitle: "Accident Risk Comparison",
      comparisonSubtitle: "Compared to other distractions, smoking is the most dangerous",
      risk: "risk",
      mostDangerous: "MOST DANGEROUS",
      factLabel: "Fact:",
      factText1: "Smoking while driving is",
      factText2: "almost 2x more dangerous",
      factText3: "than using your phone!",
      stats: [
        {
          value: "23x",
          label: "More Likely to Crash",
          description: "Drivers who smoke have a 23 times higher risk of accidents compared to focused drivers.",
          source: "Journal of Transport & Health Study, 2021",
        },
        {
          value: "70 Million",
          label: "Active Smokers in Indonesia",
          description: "Indonesia is one of the countries with the highest number of smokers in the world.",
          source: "Indonesian Ministry of Health, 2023",
        },
        {
          value: "5 Seconds",
          label: "Average Time to Light Cigarette",
          description: "5 seconds is enough to travel over 100 meters at 80 km/h.",
          source: "National Highway Traffic Safety Administration",
        },
        {
          value: "3 Types",
          label: "Distractions at Once",
          description: "Smoking causes visual, manual, and cognitive distractions simultaneously.",
          source: "AAA Foundation for Traffic Safety",
        },
      ],
      comparison: [
        { activity: "Smoking", risk: 23 },
        { activity: "Using Phone", risk: 12 },
        { activity: "Drunk", risk: 7 },
        { activity: "Drowsy", risk: 4 },
      ],
    },
  };

  const t = content[language];
  const icons = [TrendingUp, Users, AlertOctagon, BarChart3];
  const comparisonColors = ["bg-danger", "bg-warning", "bg-primary", "bg-muted-foreground"];

  return (
    <section className="relative">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/50 rounded-full mb-4">
            <BarChart3 className="w-5 h-5 text-primary" />
            <span className="text-primary-foreground font-semibold text-sm uppercase tracking-wider">
              {t.badge}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            {t.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {t.stats.map((stat, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="card-dark group cursor-pointer transition-all duration-300 hover:border-danger/50 hover:scale-105"
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <Icon className="w-8 h-8 text-danger mb-4" />
                <p className="text-4xl md:text-5xl font-black text-gradient-danger mb-2">
                  {stat.value}
                </p>
                <p className="text-foreground font-semibold mb-2">{stat.label}</p>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    hoveredStat === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-muted-foreground mt-2">
                    {stat.description}
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-2 italic">
                    {t.source}: {stat.source}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison chart */}
        <div className="bg-card border border-border rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            {t.comparisonTitle}
          </h3>
          <p className="text-muted-foreground text-center mb-8">
            {t.comparisonSubtitle}
          </p>

          <div className="space-y-6">
            {t.comparison.map((item, index) => (
              <div key={item.activity} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{item.activity}</span>
                  <span className="font-bold text-foreground">{item.risk}x {t.risk}</span>
                </div>
                <div className="h-8 bg-secondary rounded-lg overflow-hidden relative">
                  <div
                    className={`h-full ${comparisonColors[index]} transition-all duration-1000 ease-out rounded-lg flex items-center justify-end pr-3`}
                    style={{ width: `${(item.risk / 25) * 100}%` }}
                  >
                    {index === 0 && (
                      <span className="text-xs font-bold text-danger-foreground">
                        {t.mostDangerous}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-danger/10 border border-danger/30 rounded-lg">
            <p className="text-center text-foreground">
              <span className="font-bold text-danger">{t.factLabel}</span> {t.factText1}
              <span className="font-bold text-warning"> {t.factText2} </span>
              {t.factText3}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;