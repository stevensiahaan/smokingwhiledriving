import { useState } from "react";
import { Heart, Share2, Download, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CTASection = () => {
  const [hasPledged, setHasPledged] = useState(false);
  const [pledgeCount, setPledgeCount] = useState(8742);
  const { toast } = useToast();

  const handlePledge = () => {
    if (!hasPledged) {
      setHasPledged(true);
      setPledgeCount((prev) => prev + 1);
      toast({
        title: "Terima kasih! 🎉",
        description: "Kamu sudah berjanji untuk tidak merokok saat berkendara.",
      });
    }
  };

  const shareMessages = {
    whatsapp: "Saya baru saja berjanji untuk tidak merokok saat berkendara. Merokok sambil nyetir bukan cuma bodoh, tapi juga ilegal! 23x lebih mungkin kecelakaan. Yuk, sadar bareng! 🚗🚭",
    twitter: "Saya berjanji untuk tidak merokok saat berkendara. 🚗🚭 Merokok sambil nyetir = 23x lebih mungkin kecelakaan + ilegal! #StopMerokokSaatBerkendara #SafetyFirst",
    copy: "Merokok sambil berkendara: Bodoh + Ilegal. 23x lebih mungkin kecelakaan. Yuk sadar dan share ke teman-temanmu!",
  };

  const handleShare = (platform: "whatsapp" | "twitter" | "copy") => {
    if (platform === "whatsapp") {
      window.open(`https://wa.me/?text=${encodeURIComponent(shareMessages.whatsapp)}`, "_blank");
    } else if (platform === "twitter") {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessages.twitter)}`, "_blank");
    } else {
      navigator.clipboard.writeText(shareMessages.copy);
      toast({
        title: "Tersalin!",
        description: "Pesan sudah disalin ke clipboard. Sebarkan ke teman-temanmu!",
      });
    }
  };

  const handleDownload = () => {
    toast({
      title: "Segera Hadir!",
      description: "Infografis sedang dalam proses pembuatan. Stay tuned!",
    });
  };

  return (
    <section className="bg-blood/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-danger rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-warning rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Saatnya <span className="text-danger">Bertindak</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Membaca tidak cukup. Lakukan sesuatu.
          </p>
        </div>

        {/* Pledge section */}
        <div className="bg-card border border-border rounded-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left side - Pledge button */}
            <div className="flex-1 text-center md:text-left">
              <Heart className={`w-16 h-16 mx-auto md:mx-0 mb-4 ${hasPledged ? "text-danger fill-danger" : "text-danger"}`} />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Berjanji untuk Tidak Merokok Saat Berkendara
              </h3>
              <p className="text-muted-foreground mb-6">
                Satu langkah kecil untuk keselamatanmu dan orang lain.
              </p>

              <Button
                onClick={handlePledge}
                disabled={hasPledged}
                className={`px-8 py-6 text-lg font-bold rounded-xl transition-all duration-300 ${
                  hasPledged
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-danger hover:bg-danger/90 text-danger-foreground"
                }`}
              >
                {hasPledged ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Kamu Sudah Berjanji!
                  </>
                ) : (
                  <>
                    <Heart className="w-5 h-5 mr-2" />
                    Saya Berjanji
                  </>
                )}
              </Button>
            </div>

            {/* Right side - Counter */}
            <div className="flex-shrink-0 text-center p-8 bg-secondary rounded-xl">
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                Total Janji
              </p>
              <p className={`text-5xl font-black ${hasPledged ? "animate-counter text-danger" : "text-foreground"}`}>
                {pledgeCount.toLocaleString("id-ID")}
              </p>
              <p className="text-xs text-muted-foreground mt-1">orang sudah berjanji</p>
            </div>
          </div>
        </div>

        {/* Share section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Share buttons */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Share2 className="w-8 h-8 text-foreground" />
              <h3 className="text-xl font-bold text-foreground">
                Sebarkan Kesadaran
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Temanmu mungkin melakukan hal yang sama. Sebarkan informasi ini.
            </p>

            <div className="space-y-3">
              <Button
                onClick={() => handleShare("whatsapp")}
                className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Bagikan ke WhatsApp
              </Button>

              <Button
                onClick={() => handleShare("twitter")}
                className="w-full bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white font-bold"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Bagikan ke Twitter/X
              </Button>

              <Button
                onClick={() => handleShare("copy")}
                variant="outline"
                className="w-full font-bold"
              >
                Salin Teks
              </Button>
            </div>
          </div>

          {/* Download section */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Download className="w-8 h-8 text-foreground" />
              <h3 className="text-xl font-bold text-foreground">
                Download Infografis
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Cetak dan tempel di tempat kerja, rumah, atau komunitas.
            </p>

            {/* Infographic preview placeholder */}
            <div className="bg-secondary rounded-lg p-8 text-center mb-4">
              <div className="text-6xl mb-4">📊</div>
              <p className="text-muted-foreground text-sm">
                Preview Infografis
              </p>
            </div>

            <Button
              onClick={handleDownload}
              className="w-full bg-foreground text-background hover:bg-foreground/90 font-bold"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Infografis (PDF)
            </Button>
          </div>
        </div>

        {/* Final message */}
        <div className="mt-12 text-center">
          <p className="text-2xl font-bold text-foreground mb-2">
            Satu keputusan. <span className="text-danger">Ribuan nyawa.</span>
          </p>
          <p className="text-muted-foreground">
            Termasuk nyawamu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
