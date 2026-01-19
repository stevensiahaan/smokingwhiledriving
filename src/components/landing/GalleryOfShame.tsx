import { useState } from "react";
import { Camera, Ban } from "lucide-react";

interface GalleryOfShameProps {
  language: "id" | "en";
}

const GalleryOfShame = ({ language }: GalleryOfShameProps) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const content = {
    id: {
      badge: "Gallery of Shame",
      title: "Galeri Kebodohan",
      subtitle: "Kenali tipe-tipe pengendara yang merasa \"keren\" tapi sebenarnya membahayakan diri sendiri dan orang lain.",
      factLabel: "Fakta: ",
      bottomMessage1: "Merasa tersinggung?",
      bottomMessage2: "Bagus.",
      bottomMessage3: "Itu artinya kamu mulai sadar.",
      stamp: "BODOH",
      cards: [
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
      ],
    },
    en: {
      badge: "Gallery of Shame",
      title: "Gallery of Stupidity",
      subtitle: "Recognize the types of drivers who think they're \"cool\" but are actually endangering themselves and others.",
      factLabel: "Fact: ",
      bottomMessage1: "Feeling offended?",
      bottomMessage2: "Good.",
      bottomMessage3: "That means you're starting to realize.",
      stamp: "STUPID",
      cards: [
        {
          id: 1,
          title: "The Cool Car Driver",
          description: "Driving casually, cigarette in left hand, elbow out the window.",
          emoji: "🚗",
          fact: "One hand on wheel = 50% less control",
        },
        {
          id: 2,
          title: "The Hotshot Rider",
          description: "Riding a motorcycle, helmet lifted, smoking while speeding.",
          emoji: "🏍️",
          fact: "No protection + no focus = recipe for death",
        },
        {
          id: 3,
          title: "The Careless Passenger",
          description: "Sitting in the back, smoking, ash hitting other riders.",
          emoji: "💨",
          fact: "Cigarette ash can hit the eyes of riders behind",
        },
        {
          id: 4,
          title: "The Legendary Bus Driver",
          description: "One hand driving, one hand holding cigarette, mouth chatting.",
          emoji: "🚌",
          fact: "Responsible for the safety of dozens of passengers",
        },
        {
          id: 5,
          title: "The Multitasking Rider",
          description: "Carrying passenger, smoking, checking phone, all at once.",
          emoji: "📱",
          fact: "Triple distraction = multiplied danger",
        },
        {
          id: 6,
          title: "The Night Trucker",
          description: "Smoking to stay awake, but actually more dangerous.",
          emoji: "🚛",
          fact: "Fatigue + smoking doesn't make you more alert",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="bg-blood/20 relative overflow-hidden">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-stamp/20 border border-stamp/50 rounded-full mb-4">
            <Camera className="w-5 h-5 text-stamp" />
            <span className="text-stamp font-semibold text-sm uppercase tracking-wider">
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

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.cards.map((card) => (
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
                      <span className="font-bold text-danger">{t.factLabel}</span>
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
                  {t.stamp}
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
            {t.bottomMessage1} <span className="text-warning font-bold">{t.bottomMessage2}</span>
          </p>
          <p className="text-lg text-muted-foreground mt-2">
            {t.bottomMessage3}
          </p>
        </div>
      </div>
    </section>
  );
};

export default GalleryOfShame;