import { ExternalLink, Heart, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface FooterProps {
  language: "id" | "en";
  onLanguageChange: (lang: "id" | "en") => void;
}

const Footer = ({ language, onLanguageChange }: FooterProps) => {
  const content = {
    id: {
      sourcesTitle: "Sumber Data & Referensi",
      disclaimer: "Website ini dibuat untuk tujuan edukasi dan kesadaran publik. Data dan statistik yang ditampilkan berasal dari sumber-sumber terpercaya yang tercantum di atas. Cerita korban bersifat ilustratif berdasarkan kasus-kasus nyata yang dilaporkan.",
      disclaimerLabel: "Disclaimer:",
      madeWith: "Dibuat dengan",
      forSafety: "untuk keselamatan berkendara di Indonesia",
      shareFreely: "Sebarkan dengan bebas",
      finalMessage: "Kalau kamu baca sampai sini dan masih mau merokok sambil nyetir... yah, kami sudah berusaha.",
    },
    en: {
      sourcesTitle: "Data Sources & References",
      disclaimer: "This website is created for educational purposes and public awareness. The data and statistics displayed come from trusted sources listed above. Victim stories are illustrative based on real reported cases.",
      disclaimerLabel: "Disclaimer:",
      madeWith: "Made with",
      forSafety: "for driving safety in Indonesia",
      shareFreely: "Share freely",
      finalMessage: "If you've read this far and still want to smoke while driving... well, we tried.",
    },
  };

  const t = content[language];

  const sources = [
    {
      title: "UU No. 22 Tahun 2009",
      description: language === "id" 
        ? "Tentang Lalu Lintas dan Angkutan Jalan" 
        : "Traffic and Road Transport Law",
      url: "https://peraturan.bpk.go.id/Home/Details/38618/uu-no-22-tahun-2009",
    },
    {
      title: "Permenhub RI No. 12 Tahun 2019",
      description: language === "id"
        ? "Tentang Perlindungan Keselamatan Pengguna Sepeda Motor"
        : "Motorcycle User Safety Protection",
      url: "https://jdih.dephub.go.id/",
    },
    {
      title: language === "id" ? "Kementerian Kesehatan RI" : "Indonesian Ministry of Health",
      description: language === "id"
        ? "Data Perokok Aktif Indonesia 2023"
        : "Active Smokers Data Indonesia 2023",
      url: "https://www.kemkes.go.id/",
    },
    {
      title: "Journal of Transport & Health",
      description: language === "id"
        ? "Studi Risiko Kecelakaan Akibat Distraksi"
        : "Distraction-Related Accident Risk Study",
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
        {/* Language Selector */}
        <div className="flex justify-end mb-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <Globe className="w-4 h-4" />
                {language === "id" ? "Bahasa Indonesia" : "English"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onLanguageChange("id")}>
                🇮🇩 Bahasa Indonesia
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onLanguageChange("en")}>
                🇬🇧 English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Sources section */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            {t.sourcesTitle}
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
            <span className="font-bold">{t.disclaimerLabel}</span> {t.disclaimer}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>{t.madeWith}</span>
            <Heart className="w-4 h-4 text-danger fill-danger" />
            <span>{t.forSafety}</span>
          </div>

          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} • {t.shareFreely}
          </div>
        </div>

        {/* Final satirical message */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground italic">
            "{t.finalMessage}"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
