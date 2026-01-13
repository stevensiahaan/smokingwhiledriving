import { ExternalLink, Heart } from "lucide-react";

const Footer = () => {
  const sources = [
    {
      title: "UU No. 22 Tahun 2009",
      description: "Tentang Lalu Lintas dan Angkutan Jalan",
      url: "https://peraturan.bpk.go.id/Home/Details/38618/uu-no-22-tahun-2009",
    },
    {
      title: "Permenhub RI No. 12 Tahun 2019",
      description: "Tentang Perlindungan Keselamatan Pengguna Sepeda Motor",
      url: "https://jdih.dephub.go.id/",
    },
    {
      title: "Kementerian Kesehatan RI",
      description: "Data Perokok Aktif Indonesia 2023",
      url: "https://www.kemkes.go.id/",
    },
    {
      title: "Journal of Transport & Health",
      description: "Studi Risiko Kecelakaan Akibat Distraksi",
      url: "https://www.sciencedirect.com/journal/journal-of-transport-and-health",
    },
    {
      title: "AAA Foundation for Traffic Safety",
      description: "Distracted Driving Research",
      url: "https://aaafoundation.org/",
    },
    {
      title: "NHTSA",
      description: "National Highway Traffic Safety Administration",
      url: "https://www.nhtsa.gov/",
    },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container">
        {/* Sources section */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            Sumber Data & Referensi
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sources.map((source, index) => (
              <a
                key={index}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors group"
              >
                <ExternalLink className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5 group-hover:text-foreground" />
                <div>
                  <p className="font-medium text-foreground group-hover:text-danger transition-colors">
                    {source.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {source.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="p-6 bg-muted/50 rounded-xl mb-8 text-center">
          <p className="text-muted-foreground text-sm">
            <span className="font-bold">Disclaimer:</span> Website ini dibuat untuk tujuan edukasi dan kesadaran publik. 
            Data dan statistik yang ditampilkan berasal dari sumber-sumber terpercaya yang tercantum di atas. 
            Cerita korban bersifat ilustratif berdasarkan kasus-kasus nyata yang dilaporkan.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Dibuat dengan</span>
            <Heart className="w-4 h-4 text-danger fill-danger" />
            <span>untuk keselamatan berkendara di Indonesia</span>
          </div>

          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} • Sebarkan dengan bebas
          </div>
        </div>

        {/* Final satirical message */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground italic">
            "Kalau kamu baca sampai sini dan masih mau merokok sambil nyetir... yah, kami sudah berusaha."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
