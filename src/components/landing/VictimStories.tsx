import { Quote, Heart, Flame, Wind } from "lucide-react";

const VictimStories = () => {
  const stories = [
    {
      id: 1,
      quote: "Suami saya kecelakaan karena bara rokok jatuh di pangkuannya. Dia panik, banting stir, dan menabrak pembatas jalan. Sekarang dia lumpuh dari pinggang ke bawah.",
      author: "Istri korban, 34 tahun",
      location: "Jakarta",
      type: "Bara jatuh",
      icon: Flame,
    },
    {
      id: 2,
      quote: "Saya pengendara motor yang terkena abu rokok dari mobil di depan. Abu itu masuk ke mata saya, dan dalam sepersekian detik saya kehilangan kendali. Patah tulang di tiga tempat.",
      author: "Korban langsung, 28 tahun",
      location: "Bandung",
      type: "Abu terbang",
      icon: Wind,
    },
    {
      id: 3,
      quote: "Ayah saya meninggal karena mobil terbakar. Penyebabnya? Rokok yang jatuh dan menyala di jok. Dia tidak sempat keluar.",
      author: "Anak korban, 19 tahun",
      location: "Surabaya",
      type: "Kebakaran",
      icon: Flame,
    },
    {
      id: 4,
      quote: "Teman satu kampung saya, sopir truk, kecelakaan fatal. Saksi bilang dia sedang menyalakan rokok saat truknya masuk ke lawan arah. Dua orang meninggal.",
      author: "Warga, 45 tahun",
      location: "Semarang",
      type: "Tidak fokus",
      icon: Quote,
    },
  ];

  const additionalFacts = [
    {
      title: "Abu Rokok = Senjata Terbang",
      description: "Abu rokok yang terbang dari jendela mobil atau motor bisa mengenai mata pengendara lain, menyebabkan kebutaan sesaat dan kehilangan kendali.",
      icon: Wind,
    },
    {
      title: "Bara Rokok = Potensi Kebakaran",
      description: "Bara rokok yang jatuh di jok mobil bisa menyebabkan kebakaran. Dengan bensin di tangki, mobil bisa meledak dalam hitungan menit.",
      icon: Flame,
    },
    {
      title: "Korban Bukan Hanya Perokok",
      description: "Yang menderita bukan hanya si perokok, tapi juga penumpang, pengendara lain, pejalan kaki, dan keluarga yang ditinggalkan.",
      icon: Heart,
    },
  ];

  return (
    <section className="relative bg-background">
      {/* Dark overlay pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            hsl(var(--danger)) 10px,
            hsl(var(--danger)) 20px
          )`
        }} />
      </div>

      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blood/30 border border-blood/50 rounded-full mb-4">
            <Heart className="w-5 h-5 text-danger" />
            <span className="text-danger font-semibold text-sm uppercase tracking-wider">
              Cerita Nyata
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Mereka Bukan Statistik
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Di balik setiap angka, ada cerita. Ada keluarga. Ada nyawa.
          </p>
        </div>

        {/* Stories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-card border-l-4 border-l-danger border border-border rounded-r-xl p-6 relative"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-danger/30 absolute top-4 right-4" />

              {/* Type badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-danger/20 rounded-full mb-4">
                <story.icon className="w-4 h-4 text-danger" />
                <span className="text-xs font-medium text-danger">{story.type}</span>
              </div>

              {/* Quote */}
              <blockquote className="text-foreground text-lg leading-relaxed mb-4 italic">
                "{story.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-sm">— {story.author}</span>
                <span className="text-xs">• {story.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional facts */}
        <div className="bg-card border border-border rounded-xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            Efek Domino yang Tidak Terpikirkan
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalFacts.map((fact, index) => (
              <div
                key={index}
                className="text-center p-6 bg-secondary/50 rounded-xl"
              >
                <fact.icon className="w-12 h-12 text-danger mx-auto mb-4" />
                <h4 className="text-lg font-bold text-foreground mb-2">
                  {fact.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {fact.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Emotional closing */}
        <div className="mt-12 text-center p-8 bg-blood/10 border border-blood/30 rounded-xl">
          <p className="text-2xl font-bold text-foreground mb-4">
            Setiap kecelakaan adalah <span className="text-danger">tragedi yang bisa dicegah</span>.
          </p>
          <p className="text-muted-foreground text-lg">
            Jangan jadi bagian dari statistik. Jangan buat keluargamu meratapi kebodohanmu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VictimStories;
