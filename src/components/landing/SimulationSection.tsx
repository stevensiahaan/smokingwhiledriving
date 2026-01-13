import { useState, useEffect } from "react";
import { Eye, Timer, Car } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const SimulationSection = () => {
  const [speed, setSpeed] = useState([60]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSecond, setCurrentSecond] = useState(0);
  const [carPosition, setCarPosition] = useState(0);

  const distanceInMeters = ((speed[0] * 1000) / 3600) * 5; // 5 seconds of distraction

  useEffect(() => {
    if (isPlaying && currentSecond < 5) {
      const timer = setTimeout(() => {
        setCurrentSecond((prev) => prev + 1);
        setCarPosition((prev) => prev + 20);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (currentSecond >= 5) {
      setIsPlaying(false);
    }
  }, [isPlaying, currentSecond]);

  const startSimulation = () => {
    setCurrentSecond(0);
    setCarPosition(0);
    setIsPlaying(true);
  };

  const distractionEvents = [
    { second: 1, action: "Ambil rokok dari kantong", icon: "🚬" },
    { second: 2, action: "Cari korek/lighter", icon: "🔥" },
    { second: 3, action: "Nyalakan rokok", icon: "💨" },
    { second: 4, action: "Buang korek, pegang rokok", icon: "✋" },
    { second: 5, action: "MATA MASIH BELUM DI JALAN!", icon: "💀" },
  ];

  return (
    <section className="bg-secondary/30 relative overflow-hidden">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-danger/20 border border-danger/50 rounded-full mb-4">
            <Eye className="w-5 h-5 text-danger" />
            <span className="text-danger font-semibold text-sm uppercase tracking-wider">
              Simulasi Visual
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            "Mata Lo Kemana Aja?"
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            5 detik untuk menyalakan rokok. Lihat apa yang terjadi saat mata kamu tidak di jalan.
          </p>
        </div>

        {/* Speed slider */}
        <div className="max-w-md mx-auto mb-8">
          <label className="block text-sm font-medium text-muted-foreground mb-4 text-center">
            Kecepatan Kendaraan: <span className="text-foreground font-bold text-xl">{speed[0]} km/jam</span>
          </label>
          <Slider
            value={speed}
            onValueChange={setSpeed}
            min={40}
            max={120}
            step={10}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>40 km/jam</span>
            <span>120 km/jam</span>
          </div>
        </div>

        {/* Distance result */}
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground">
            Dalam 5 detik, kamu akan menempuh jarak:
          </p>
          <p className="text-5xl md:text-7xl font-black text-danger mt-2">
            {distanceInMeters.toFixed(0)} meter
          </p>
          <p className="text-muted-foreground mt-2">
            <span className="text-warning font-semibold">TANPA MELIHAT JALAN!</span>
          </p>
        </div>

        {/* Visual simulation */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8 overflow-hidden">
          {/* Road visualization */}
          <div className="relative h-24 bg-secondary rounded-lg mb-6 overflow-hidden">
            {/* Road markings */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-2 bg-warning/30 relative">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-2 w-8 bg-warning"
                    style={{ left: `${i * 11}%` }}
                  />
                ))}
              </div>
            </div>
            {/* Car */}
            <div
              className="absolute top-1/2 -translate-y-1/2 transition-all duration-1000 ease-linear"
              style={{ left: `${carPosition}%` }}
            >
              <Car className="w-12 h-12 text-danger" />
            </div>
            {/* Blind zone indicator */}
            {isPlaying && (
              <div
                className="absolute top-0 bottom-0 bg-danger/30 border-r-2 border-danger transition-all duration-1000"
                style={{ left: 0, width: `${carPosition}%` }}
              >
                <span className="absolute top-1 left-1 text-xs text-danger font-bold">
                  ZONA BUTA
                </span>
              </div>
            )}
          </div>

          {/* Timeline */}
          <div className="grid grid-cols-5 gap-2">
            {distractionEvents.map((event, index) => (
              <div
                key={event.second}
                className={`text-center p-3 rounded-lg transition-all duration-300 ${
                  currentSecond >= event.second
                    ? "bg-danger text-danger-foreground"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                <div className="text-2xl mb-1">{event.icon}</div>
                <div className="text-xs font-medium">
                  Detik {event.second}
                </div>
                <div className="text-xs mt-1 hidden md:block">
                  {event.action}
                </div>
              </div>
            ))}
          </div>

          {/* Timer display */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Timer className="w-6 h-6 text-muted-foreground" />
            <span className="text-4xl font-mono font-bold text-foreground">
              {currentSecond} / 5 detik
            </span>
          </div>

          {/* Start button */}
          <div className="text-center mt-6">
            <button
              onClick={startSimulation}
              disabled={isPlaying}
              className="px-8 py-4 bg-danger text-danger-foreground font-bold text-lg rounded-lg hover:bg-danger/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPlaying ? "Simulasi Berjalan..." : "Mulai Simulasi"}
            </button>
          </div>
        </div>

        {/* Impact message */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground">
            Dalam {distanceInMeters.toFixed(0)} meter, banyak hal bisa terjadi:
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {[
              "Anak kecil menyeberang",
              "Motor menyalip",
              "Mobil depan berhenti mendadak",
              "Lubang jalan",
              "Pejalan kaki",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 bg-blood/30 border border-danger/50 rounded-full text-sm text-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimulationSection;
