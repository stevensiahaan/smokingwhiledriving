import { Scale, FileWarning, Banknote, Clock } from "lucide-react";

interface LegalSectionProps {
  language: "id" | "en";
}

const LegalSection = ({ language }: LegalSectionProps) => {
  const content = {
    id: {
      badge: "Aspek Hukum",
      title1: "Bukan Cuma Bodoh,",
      title2: "Ini ILEGAL!",
      subtitle: "Merokok sambil berkendara melanggar hukum di Indonesia. Ini bukan soal selera, ini soal kepatuhan hukum.",
      penaltySummary: "Rangkuman Sanksi",
      penaltyNote1: "Belum termasuk",
      hospitalCost: "biaya rumah sakit",
      victimCompensation: "ganti rugi korban",
      lifelongRegret: "penyesalan seumur hidup",
      ticketTitle: "Surat Tilang",
      ticketSubtitle: "Ini yang akan kamu terima jika ketahuan",
      totalFine: "Total Denda",
      orPrison: "Atau kurungan 3 bulan penjara",
      stillWant: "Masih mau coba-coba?",
      sanction: "Sanksi:",
      laws: [
        {
          title: "UU No. 22 Tahun 2009",
          subtitle: "Tentang Lalu Lintas dan Angkutan Jalan",
          article: "Pasal 106 Ayat (1)",
          content: "Setiap orang yang mengemudikan Kendaraan Bermotor di Jalan wajib mengemudikan kendaraannya dengan wajar dan penuh konsentrasi.",
          penalty: null,
        },
        {
          title: "UU No. 22 Tahun 2009",
          subtitle: "Tentang Lalu Lintas dan Angkutan Jalan",
          article: "Pasal 283",
          content: "Setiap orang yang mengemudikan Kendaraan Bermotor di Jalan secara tidak wajar dan melakukan kegiatan lain atau dipengaruhi oleh suatu keadaan yang mengakibatkan gangguan konsentrasi dalam mengemudi di Jalan...",
          penalty: "Pidana kurungan paling lama 3 bulan atau denda paling banyak Rp750.000",
        },
        {
          title: "Permenhub RI No. 12 Tahun 2019",
          subtitle: "Tentang Perlindungan Keselamatan Pengguna Sepeda Motor",
          article: "Pasal 6 Huruf c",
          content: "Pengemudi Sepeda Motor dilarang merokok saat mengendarai kendaraan.",
          penalty: "Pelanggaran dapat dikenakan sanksi sesuai peraturan yang berlaku",
        },
      ],
      penalties: [
        { title: "Denda Maksimal", value: "Rp750.000", description: "Per pelanggaran" },
        { title: "Kurungan Maksimal", value: "3 Bulan", description: "Penjara" },
        { title: "Catatan di SIM", value: "Poin Pelanggaran", description: "Bisa dicabut jika berulang" },
      ],
    },
    en: {
      badge: "Legal Aspect",
      title1: "Not Just Stupid,",
      title2: "It's ILLEGAL!",
      subtitle: "Smoking while driving violates the law in Indonesia. This isn't about preference, it's about legal compliance.",
      penaltySummary: "Penalty Summary",
      penaltyNote1: "Not including",
      hospitalCost: "hospital costs",
      victimCompensation: "victim compensation",
      lifelongRegret: "lifelong regret",
      ticketTitle: "Traffic Ticket",
      ticketSubtitle: "This is what you'll receive if caught",
      totalFine: "Total Fine",
      orPrison: "Or 3 months imprisonment",
      stillWant: "Still want to try?",
      sanction: "Penalty:",
      laws: [
        {
          title: "Law No. 22 of 2009",
          subtitle: "Regarding Traffic and Road Transport",
          article: "Article 106 Paragraph (1)",
          content: "Every person operating a Motor Vehicle on the Road must drive their vehicle properly and with full concentration.",
          penalty: null,
        },
        {
          title: "Law No. 22 of 2009",
          subtitle: "Regarding Traffic and Road Transport",
          article: "Article 283",
          content: "Every person who operates a Motor Vehicle on the Road improperly and engages in other activities or is influenced by a condition that causes disturbance of concentration in driving on the Road...",
          penalty: "Imprisonment for a maximum of 3 months or a fine of up to Rp750,000",
        },
        {
          title: "Minister of Transportation Regulation No. 12 of 2019",
          subtitle: "Regarding Motorcycle User Safety Protection",
          article: "Article 6 Letter c",
          content: "Motorcycle drivers are prohibited from smoking while operating the vehicle.",
          penalty: "Violations may be subject to sanctions in accordance with applicable regulations",
        },
      ],
      penalties: [
        { title: "Maximum Fine", value: "Rp750,000", description: "Per violation" },
        { title: "Maximum Imprisonment", value: "3 Months", description: "Prison" },
        { title: "License Record", value: "Violation Points", description: "Can be revoked if repeated" },
      ],
    },
  };

  const t = content[language];
  const lawIcons = [Scale, FileWarning, FileWarning];
  const penaltyIcons = [Banknote, Clock, FileWarning];

  return (
    <section className="bg-secondary/30 relative">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-warning/20 border border-warning/50 rounded-full mb-4">
            <Scale className="w-5 h-5 text-warning" />
            <span className="text-warning font-semibold text-sm uppercase tracking-wider">
              {t.badge}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            {t.title1} <span className="text-danger">{t.title2}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Laws cards */}
        <div className="space-y-6 mb-12">
          {t.laws.map((law, index) => {
            const Icon = lawIcons[index];
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 md:p-8 relative overflow-hidden group hover:border-warning/50 transition-colors"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-warning/5 rounded-full -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <Icon className="w-10 h-10 text-warning flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {law.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {law.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Article badge */}
                  <div className="inline-block px-4 py-2 bg-warning/20 border border-warning/50 rounded-lg mb-4">
                    <span className="font-bold text-warning">{law.article}</span>
                  </div>

                  {/* Content */}
                  <p className="text-foreground text-lg leading-relaxed mb-4">
                    "{law.content}"
                  </p>

                  {/* Penalty */}
                  {law.penalty && (
                    <div className="p-4 bg-danger/10 border border-danger/30 rounded-lg">
                      <p className="text-foreground">
                        <span className="font-bold text-danger">{t.sanction} </span>
                        {law.penalty}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Penalty summary */}
        <div className="bg-card border-2 border-warning/50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            {t.penaltySummary}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.penalties.map((penalty, index) => {
              const Icon = penaltyIcons[index];
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-warning/10 border border-warning/30 rounded-xl"
                >
                  <Icon className="w-12 h-12 text-warning mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground mb-2">
                    {penalty.title}
                  </p>
                  <p className="text-3xl font-black text-foreground mb-1">
                    {penalty.value}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {penalty.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Warning message */}
          <div className="mt-8 text-center">
            <p className="text-lg text-foreground">
              {t.penaltyNote1} <span className="text-danger font-bold">{t.hospitalCost}</span>,
              <span className="text-danger font-bold"> {t.victimCompensation}</span>,
              {language === "id" ? " dan" : " and"} <span className="text-danger font-bold">{t.lifelongRegret}</span>.
            </p>
          </div>
        </div>

        {/* Tilang visualization */}
        <div className="mt-12">
          <div className="bg-card border border-border rounded-xl p-8 relative overflow-hidden">
            {/* Fake tilang paper effect */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 20px,
                hsl(var(--foreground)) 20px,
                hsl(var(--foreground)) 21px
              )`
            }} />

            <div className="relative z-10 text-center">
              <p className="text-6xl mb-4">📝</p>
              <h4 className="text-2xl font-bold text-foreground mb-2">
                {t.ticketTitle}
              </h4>
              <p className="text-muted-foreground mb-6">
                {t.ticketSubtitle}
              </p>

              <div className="inline-block p-6 bg-warning/10 border-2 border-warning rounded-lg">
                <p className="text-sm text-muted-foreground">{t.totalFine}</p>
                <p className="text-5xl font-black text-warning">
                  Rp750.000
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  {t.orPrison}
                </p>
              </div>

              <p className="mt-6 text-muted-foreground">
                {t.stillWant}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalSection;