import { Scale, FileWarning, Banknote, Clock } from "lucide-react";

const LegalSection = () => {
  const laws = [
    {
      title: "UU No. 22 Tahun 2009",
      subtitle: "Tentang Lalu Lintas dan Angkutan Jalan",
      article: "Pasal 106 Ayat (1)",
      content: "Setiap orang yang mengemudikan Kendaraan Bermotor di Jalan wajib mengemudikan kendaraannya dengan wajar dan penuh konsentrasi.",
      penalty: null,
      icon: Scale,
    },
    {
      title: "UU No. 22 Tahun 2009",
      subtitle: "Tentang Lalu Lintas dan Angkutan Jalan",
      article: "Pasal 283",
      content: "Setiap orang yang mengemudikan Kendaraan Bermotor di Jalan secara tidak wajar dan melakukan kegiatan lain atau dipengaruhi oleh suatu keadaan yang mengakibatkan gangguan konsentrasi dalam mengemudi di Jalan...",
      penalty: "Pidana kurungan paling lama 3 bulan atau denda paling banyak Rp750.000",
      icon: FileWarning,
    },
    {
      title: "Permenhub RI No. 12 Tahun 2019",
      subtitle: "Tentang Perlindungan Keselamatan Pengguna Sepeda Motor",
      article: "Pasal 6 Huruf c",
      content: "Pengemudi Sepeda Motor dilarang merokok saat mengendarai kendaraan.",
      penalty: "Pelanggaran dapat dikenakan sanksi sesuai peraturan yang berlaku",
      icon: FileWarning,
    },
  ];

  const penalties = [
    {
      icon: Banknote,
      title: "Denda Maksimal",
      value: "Rp750.000",
      description: "Per pelanggaran",
    },
    {
      icon: Clock,
      title: "Kurungan Maksimal",
      value: "3 Bulan",
      description: "Penjara",
    },
    {
      icon: FileWarning,
      title: "Catatan di SIM",
      value: "Poin Pelanggaran",
      description: "Bisa dicabut jika berulang",
    },
  ];

  return (
    <section className="bg-secondary/30 relative">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-warning/20 border border-warning/50 rounded-full mb-4">
            <Scale className="w-5 h-5 text-warning" />
            <span className="text-warning font-semibold text-sm uppercase tracking-wider">
              Aspek Hukum
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Bukan Cuma Bodoh, <span className="text-danger">Ini ILEGAL!</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Merokok sambil berkendara melanggar hukum di Indonesia. Ini bukan soal selera, ini soal kepatuhan hukum.
          </p>
        </div>

        {/* Laws cards */}
        <div className="space-y-6 mb-12">
          {laws.map((law, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 md:p-8 relative overflow-hidden group hover:border-warning/50 transition-colors"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-warning/5 rounded-full -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <law.icon className="w-10 h-10 text-warning flex-shrink-0" />
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
                      <span className="font-bold text-danger">Sanksi: </span>
                      {law.penalty}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Penalty summary */}
        <div className="bg-card border-2 border-warning/50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            Rangkuman Sanksi
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {penalties.map((penalty, index) => (
              <div
                key={index}
                className="text-center p-6 bg-warning/10 border border-warning/30 rounded-xl"
              >
                <penalty.icon className="w-12 h-12 text-warning mx-auto mb-4" />
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
            ))}
          </div>

          {/* Warning message */}
          <div className="mt-8 text-center">
            <p className="text-lg text-foreground">
              Belum termasuk <span className="text-danger font-bold">biaya rumah sakit</span>, 
              <span className="text-danger font-bold"> ganti rugi korban</span>, 
              dan <span className="text-danger font-bold">penyesalan seumur hidup</span>.
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
                Surat Tilang
              </h4>
              <p className="text-muted-foreground mb-6">
                Ini yang akan kamu terima jika ketahuan
              </p>

              <div className="inline-block p-6 bg-warning/10 border-2 border-warning rounded-lg">
                <p className="text-sm text-muted-foreground">Total Denda</p>
                <p className="text-5xl font-black text-warning">
                  Rp750.000
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Atau kurungan 3 bulan penjara
                </p>
              </div>

              <p className="mt-6 text-muted-foreground">
                Masih mau coba-coba?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalSection;
