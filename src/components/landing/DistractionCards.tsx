import { Eye, Hand, Brain, AlertTriangle } from "lucide-react";
import { useState } from "react";

const DistractionCards = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const distractions = [
    {
      id: 1,
      type: "Visual",
      title: "Mata Lo Kemana?",
      icon: Eye,
      color: "danger",
      shortDesc: "Mata tidak di jalan",
      fullDesc: "Saat menyalakan rokok, mata kamu harus fokus ke korek dan rokok. Rata-rata 2-4 detik mata tidak melihat jalan. Pada kecepatan 80 km/jam, kamu sudah menempuh 44-88 meter dalam keadaan buta.",
      examples: [
        "Ambil rokok dari bungkus",
        "Cari korek di kantong/dashboard",
        "Nyalakan rokok",
        "Buang abu keluar jendela",
      ],
      danger: "88 meter dalam kebutaan",
    },
    {
      id: 2,
      type: "Manual",
      title: "Tangan Lo Kemana?",
      icon: Hand,
      color: "warning",
      shortDesc: "Tangan tidak di stir",
      fullDesc: "Minimal satu tangan harus meninggalkan stir untuk memegang rokok. Saat menyalakan, kedua tangan bahkan bisa lepas dari stir. Kontrol kendaraan berkurang drastis.",
      examples: [
        "Satu tangan pegang rokok",
        "Satu tangan pegang korek",
        "Mengetuk abu dari rokok",
        "Membuang puntung",
      ],
      danger: "Kontrol berkurang 50%",
    },
    {
      id: 3,
      type: "Kognitif",
      title: "Otak Lo Kemana?",
      icon: Brain,
      color: "primary",
      shortDesc: "Pikiran tidak fokus",
      fullDesc: "Otak manusia tidak bisa benar-benar multitasking. Saat merokok, sebagian kapasitas otak dialokasikan untuk aktivitas merokok, mengurangi fokus pada kondisi jalan.",
      examples: [
        "Mikirin sensasi merokok",
        "Khawatir abu jatuh di baju",
        "Cari tempat buang abu",
        "Nikmat > kewaspadaan",
      ],
      danger: "Reaksi melambat 25%",
    },
  ];

  return (
    <section className="relative">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-danger/20 border border-danger/50 rounded-full mb-4">
            <AlertTriangle className="w-5 h-5 text-danger" />
            <span className="text-danger font-semibold text-sm uppercase tracking-wider">
              Triple Threat
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            3 Cara Kamu Membahayakan Diri Sendiri
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Merokok sambil berkendara menyebabkan TIGA jenis distraksi sekaligus. Ini yang membuatnya sangat berbahaya.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {distractions.map((distraction) => (
            <div
              key={distraction.id}
              className={`bg-card border-2 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                activeCard === distraction.id
                  ? `border-${distraction.color} scale-105`
                  : "border-border hover:border-muted-foreground"
              }`}
              onClick={() => setActiveCard(activeCard === distraction.id ? null : distraction.id)}
            >
              {/* Header */}
              <div className={`p-6 ${
                distraction.color === "danger" ? "bg-danger/20" :
                distraction.color === "warning" ? "bg-warning/20" :
                "bg-primary/20"
              }`}>
                <distraction.icon className={`w-16 h-16 mx-auto ${
                  distraction.color === "danger" ? "text-danger" :
                  distraction.color === "warning" ? "text-warning" :
                  "text-primary"
                }`} />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Type badge */}
                <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-3 ${
                  distraction.color === "danger" ? "bg-danger/20 text-danger" :
                  distraction.color === "warning" ? "bg-warning/20 text-warning" :
                  "bg-primary/20 text-primary"
                }`}>
                  Distraksi {distraction.type}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {distraction.title}
                </h3>

                {/* Short description */}
                <p className="text-muted-foreground mb-4">
                  {distraction.shortDesc}
                </p>

                {/* Expanded content */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  activeCard === distraction.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}>
                  <p className="text-foreground text-sm mb-4 leading-relaxed">
                    {distraction.fullDesc}
                  </p>

                  <div className="space-y-2 mb-4">
                    <p className="text-xs font-bold text-muted-foreground uppercase">
                      Contoh Aktivitas:
                    </p>
                    {distraction.examples.map((example, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          distraction.color === "danger" ? "bg-danger" :
                          distraction.color === "warning" ? "bg-warning" :
                          "bg-primary"
                        }`} />
                        <span className="text-sm text-muted-foreground">{example}</span>
                      </div>
                    ))}
                  </div>

                  <div className={`p-3 rounded-lg ${
                    distraction.color === "danger" ? "bg-danger/20 border border-danger/30" :
                    distraction.color === "warning" ? "bg-warning/20 border border-warning/30" :
                    "bg-primary/20 border border-primary/30"
                  }`}>
                    <p className={`text-sm font-bold ${
                      distraction.color === "danger" ? "text-danger" :
                      distraction.color === "warning" ? "text-warning" :
                      "text-primary"
                    }`}>
                      Bahaya: {distraction.danger}
                    </p>
                  </div>
                </div>

                {/* Click indicator */}
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  {activeCard === distraction.id ? "Klik untuk tutup" : "Klik untuk detail"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Combined danger */}
        <div className="mt-12 bg-gradient-to-r from-danger/20 via-warning/20 to-primary/20 border border-danger/50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Kombinasi Ketiganya = <span className="text-danger">BENCANA</span>
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tidak ada aktivitas lain yang menyebabkan ketiga jenis distraksi sekaligus dengan intensitas setinggi merokok. 
            Inilah mengapa merokok sambil berkendara <span className="text-danger font-bold">23x lebih berbahaya</span> dari berkendara normal.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-danger" />
              <span className="text-foreground">Visual</span>
            </div>
            <span className="text-muted-foreground">+</span>
            <div className="flex items-center gap-2">
              <Hand className="w-5 h-5 text-warning" />
              <span className="text-foreground">Manual</span>
            </div>
            <span className="text-muted-foreground">+</span>
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              <span className="text-foreground">Kognitif</span>
            </div>
            <span className="text-muted-foreground">=</span>
            <span className="text-danger font-bold text-xl">💀</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistractionCards;
