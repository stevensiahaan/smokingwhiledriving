import { useState } from "react";
import { BarChart3, TrendingUp, Users, AlertOctagon } from "lucide-react";

const StatisticsSection = () => {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const stats = [
    {
      value: "23x",
      label: "Lebih Mungkin Kecelakaan",
      description: "Pengemudi yang merokok memiliki risiko kecelakaan 23 kali lebih tinggi dibanding yang fokus.",
      source: "Studi Journal of Transport & Health, 2021",
      icon: TrendingUp,
    },
    {
      value: "70 Juta",
      label: "Perokok Aktif di Indonesia",
      description: "Indonesia adalah salah satu negara dengan jumlah perokok terbanyak di dunia.",
      source: "Kementerian Kesehatan RI, 2023",
      icon: Users,
    },
    {
      value: "5 Detik",
      label: "Rata-rata Waktu Menyalakan Rokok",
      description: "5 detik cukup untuk menempuh lebih dari 100 meter pada kecepatan 80 km/jam.",
      source: "National Highway Traffic Safety Administration",
      icon: AlertOctagon,
    },
    {
      value: "3 Jenis",
      label: "Distraksi Sekaligus",
      description: "Merokok menyebabkan distraksi visual, manual, dan kognitif secara bersamaan.",
      source: "AAA Foundation for Traffic Safety",
      icon: BarChart3,
    },
  ];

  const comparisonData = [
    { activity: "Merokok", risk: 23, color: "bg-danger" },
    { activity: "Main HP", risk: 12, color: "bg-warning" },
    { activity: "Mabuk", risk: 7, color: "bg-primary" },
    { activity: "Mengantuk", risk: 4, color: "bg-muted-foreground" },
  ];

  return (
    <section className="relative">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/50 rounded-full mb-4">
            <BarChart3 className="w-5 h-5 text-primary" />
            <span className="text-primary-foreground font-semibold text-sm uppercase tracking-wider">
              Data & Fakta
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Angka Tidak Berbohong
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ini bukan opini. Ini adalah data dari penelitian dan statistik resmi.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card-dark group cursor-pointer transition-all duration-300 hover:border-danger/50 hover:scale-105"
              onMouseEnter={() => setHoveredStat(index)}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <stat.icon className="w-8 h-8 text-danger mb-4" />
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
                  Sumber: {stat.source}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison chart */}
        <div className="bg-card border border-border rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Perbandingan Risiko Kecelakaan
          </h3>
          <p className="text-muted-foreground text-center mb-8">
            Dibandingkan dengan distraksi lain, merokok adalah yang paling berbahaya
          </p>

          <div className="space-y-6">
            {comparisonData.map((item) => (
              <div key={item.activity} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{item.activity}</span>
                  <span className="font-bold text-foreground">{item.risk}x risiko</span>
                </div>
                <div className="h-8 bg-secondary rounded-lg overflow-hidden relative">
                  <div
                    className={`h-full ${item.color} transition-all duration-1000 ease-out rounded-lg flex items-center justify-end pr-3`}
                    style={{ width: `${(item.risk / 25) * 100}%` }}
                  >
                    {item.activity === "Merokok" && (
                      <span className="text-xs font-bold text-danger-foreground">
                        PALING BERBAHAYA
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-danger/10 border border-danger/30 rounded-lg">
            <p className="text-center text-foreground">
              <span className="font-bold text-danger">Fakta:</span> Merokok sambil berkendara 
              <span className="font-bold text-warning"> hampir 2x lebih berbahaya </span> 
              dari main handphone!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
