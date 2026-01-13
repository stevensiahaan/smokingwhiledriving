import { useState } from "react";
import { Camera, Ban } from "lucide-react";

interface ShameCard {
  id: number;
  title: string;
  description: string;
  emoji: string;
  fact: string;
}

const GalleryOfShame = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const shameCards: ShameCard[] = [
    {
      id: 1,
      title: "Si Keren Bermobil",
      description: "Nyetir santai, rokok di tangan kiri, siku keluar jendela.",
      emoji: "🚗",
      fact: "Satu tangan di stir = kontrol berkurang 50%",
    },
    {
      id: 2,
      title: "Rider Sok Jagoan",
      description: "Naik motor, helm diangkat, ngerokok sambil gas pol.",
      emoji: "🏍️",
      fact: "Tidak ada proteksi + tidak fokus = resep maut",
    },
    {
      id: 3,
      title: "Boncenger Cuek",
      description: "Duduk di belakang, ngerokok, abunya kena pengendara lain.",
      emoji: "💨",
      fact: "Abu rokok bisa mengenai mata pengendara di belakang",
    },
    {
      id: 4,
      title: "Sopir Angkot Legend",
      description: "Satu tangan nyetir, satu lagi pegang rokok, mulut ngobrol.",
      emoji: "🚌",
      fact: "Bertanggung jawab atas keselamatan puluhan penumpang",
    },
    {
      id: 5,
      title: "Ojol Multitasking",
      description: "Bawa penumpang, ngerokok, cek HP, semua sekaligus.",
      emoji: "📱",
      fact: "Triple distraction = bahaya berlipat ganda",
    },
    {
      id: 6,
      title: "Truk Malam",
      description: "Ngerokok biar melek, tapi malah makin bahaya.",
      emoji: "🚛",
      fact: "Kelelahan + rokok tidak membuat lebih waspada",
    },
  ];

  return (
    <section className="bg-blood/20 relative overflow-hidden">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-stamp/20 border border-stamp/50 rounded-full mb-4">
            <Camera className="w-5 h-5 text-stamp" />
            <span className="text-stamp font-semibold text-sm uppercase tracking-wider">
              Gallery of Shame
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Galeri Kebodohan
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Kenali tipe-tipe pengendara yang merasa "keren" tapi sebenarnya membahayakan diri sendiri dan orang lain.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shameCards.map((card) => (
            <div
              key={card.id}
              className="relative bg-card border border-border rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 hover:border-stamp/50"
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card content */}
              <div className="p-6">
                {/* Emoji illustration */}
                <div className="text-8xl mb-4 text-center transition-transform duration-300 group-hover:scale-110">
                  {card.emoji}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2 text-center">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-center mb-4">
                  {card.description}
                </p>

                {/* Fact on hover */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    hoveredCard === card.id ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-3 bg-danger/20 border border-danger/30 rounded-lg">
                    <p className="text-sm text-foreground text-center">
                      <span className="font-bold text-danger">Fakta: </span>
                      {card.fact}
                    </p>
                  </div>
                </div>
              </div>

              {/* BODOH stamp overlay */}
              <div
                className={`absolute inset-0 flex items-center justify-center bg-background/80 transition-all duration-300 ${
                  hoveredCard === card.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="stamp-bodoh" style={{ animationPlayState: hoveredCard === card.id ? "running" : "paused" }}>
                  BODOH
                </div>
              </div>

              {/* Ban icon */}
              <div className="absolute top-4 right-4">
                <Ban className="w-8 h-8 text-danger opacity-50" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-12 text-center">
          <p className="text-xl text-muted-foreground">
            Merasa tersinggung? <span className="text-warning font-bold">Bagus.</span>
          </p>
          <p className="text-lg text-muted-foreground mt-2">
            Itu artinya kamu mulai sadar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GalleryOfShame;
