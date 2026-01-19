import { useState, useEffect } from "react";
import { Cigarette, AlertTriangle, Skull } from "lucide-react";

interface HeroSectionProps {
  language: "id" | "en";
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const [visitorCount, setVisitorCount] = useState(12847);
  const [stubbornCount, setStubbornCount] = useState(8234);

  const content = {
    id: {
      warning: "Peringatan Keras",
      headline1: "Selamat!",
      headline2: "Kamu 23x Lebih Mungkin Kecelakaan",
      subtitle1: "Merokok sambil nyetir bukan cuma",
      stupid: "bodoh",
      subtitle2: ", tapi juga",
      illegal: "ilegal",
      subtitle3: ". Mari kita bahas kenapa kamu harus berhenti.",
      visitedLabel: "Sudah Baca Halaman Ini",
      people: "orang",
      stubbornLabel: "Masih Keras Kepala",
      estimated: "orang (estimasi)",
    },
    en: {
      warning: "Severe Warning",
      headline1: "Congratulations!",
      headline2: "You're 23x More Likely to Crash",
      subtitle1: "Smoking while driving isn't just",
      stupid: "stupid",
      subtitle2: ", it's also",
      illegal: "illegal",
      subtitle3: ". Let's discuss why you should stop.",
      visitedLabel: "Have Read This Page",
      people: "people",
      stubbornLabel: "Still Stubborn",
      estimated: "people (estimated)",
    },
  };

  const t = content[language];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount((prev) => prev + Math.floor(Math.random() * 3));
      if (Math.random() > 0.7) {
        setStubbornCount((prev) => prev + 1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-danger">
      {/* Smoke particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-smoke/30 animate-smoke"
            style={{
              left: `${10 + i * 12}%`,
              bottom: "10%",
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="section-container text-center relative z-10">
        {/* Warning badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-warning/20 border border-warning/50 rounded-full mb-8 animate-fade-in">
          <AlertTriangle className="w-5 h-5 text-warning" />
          <span className="text-warning font-semibold text-sm uppercase tracking-wider">
            {t.warning}
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <span className="text-foreground">{t.headline1}</span>
          <br />
          <span className="text-gradient-danger">
            {t.headline2}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {t.subtitle1} <span className="text-danger font-bold">{t.stupid}</span>
          {t.subtitle2} <span className="text-warning font-bold">{t.illegal}</span>
          {t.subtitle3}
        </p>

        {/* Cigarette icon with skull */}
        <div className="relative inline-block my-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Cigarette className="w-24 h-24 md:w-32 md:h-32 text-muted-foreground animate-float" />
          <Skull className="absolute -top-2 -right-2 w-10 h-10 text-danger animate-pulse-danger" />
        </div>

        {/* Live counters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-12 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <div className="card-dark">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
              {t.visitedLabel}
            </p>
            <p className="text-4xl font-black text-foreground">
              {visitorCount.toLocaleString(language === "id" ? "id-ID" : "en-US")}
            </p>
            <p className="text-xs text-muted-foreground mt-1">{t.people}</p>
          </div>
          <div className="card-dark border-danger/50">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
              {t.stubbornLabel}
            </p>
            <p className="text-4xl font-black text-danger">
              {stubbornCount.toLocaleString(language === "id" ? "id-ID" : "en-US")}
            </p>
            <p className="text-xs text-muted-foreground mt-1">{t.estimated}</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-muted-foreground rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;