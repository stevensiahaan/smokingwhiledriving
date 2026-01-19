import { useState } from "react";
import { Heart, Share2, Download, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface CTASectionProps {
  language: "id" | "en";
}

const CTASection = ({ language }: CTASectionProps) => {
  const [hasPledged, setHasPledged] = useState(false);
  const [pledgeCount, setPledgeCount] = useState(8742);
  const { toast } = useToast();

  const content = {
    id: {
      title1: "Saatnya",
      title2: "Bertindak",
      subtitle: "Membaca tidak cukup. Lakukan sesuatu.",
      pledgeTitle: "Berjanji untuk Tidak Merokok Saat Berkendara",
      pledgeSubtitle: "Satu langkah kecil untuk keselamatanmu dan orang lain.",
      pledgeButton: "Saya Berjanji",
      pledged: "Kamu Sudah Berjanji!",
      totalPledge: "Total Janji",
      peoplePledged: "orang sudah berjanji",
      shareTitle: "Sebarkan Kesadaran",
      shareSubtitle: "Temanmu mungkin melakukan hal yang sama. Sebarkan informasi ini.",
      shareWhatsapp: "Bagikan ke WhatsApp",
      shareTwitter: "Bagikan ke Twitter/X",
      copyText: "Salin Teks",
      downloadTitle: "Download Infografis",
      downloadSubtitle: "Cetak dan tempel di tempat kerja, rumah, atau komunitas.",
      previewLabel: "Preview Infografis",
      downloadButton: "Download Infografis (PDF)",
      finalMessage1: "Satu keputusan.",
      finalMessage2: "Ribuan nyawa.",
      finalMessage3: "Termasuk nyawamu.",
      toastPledgeTitle: "Terima kasih! 🎉",
      toastPledgeDesc: "Kamu sudah berjanji untuk tidak merokok saat berkendara.",
      toastCopyTitle: "Tersalin!",
      toastCopyDesc: "Pesan sudah disalin ke clipboard. Sebarkan ke teman-temanmu!",
      toastDownloadTitle: "Segera Hadir!",
      toastDownloadDesc: "Infografis sedang dalam proses pembuatan. Stay tuned!",
      shareMessages: {
        whatsapp: "Saya baru saja berjanji untuk tidak merokok saat berkendara. Merokok sambil nyetir bukan cuma bodoh, tapi juga ilegal! 23x lebih mungkin kecelakaan. Yuk, sadar bareng! 🚗🚭",
        twitter: "Saya berjanji untuk tidak merokok saat berkendara. 🚗🚭 Merokok sambil nyetir = 23x lebih mungkin kecelakaan + ilegal! #StopMerokokSaatBerkendara #SafetyFirst",
        copy: "Merokok sambil berkendara: Bodoh + Ilegal. 23x lebih mungkin kecelakaan. Yuk sadar dan share ke teman-temanmu!",
      },
    },
    en: {
      title1: "Time to",
      title2: "Take Action",
      subtitle: "Reading isn't enough. Do something.",
      pledgeTitle: "Pledge Not to Smoke While Driving",
      pledgeSubtitle: "One small step for your safety and others.",
      pledgeButton: "I Pledge",
      pledged: "You've Already Pledged!",
      totalPledge: "Total Pledges",
      peoplePledged: "people have pledged",
      shareTitle: "Spread Awareness",
      shareSubtitle: "Your friends might be doing the same thing. Share this information.",
      shareWhatsapp: "Share to WhatsApp",
      shareTwitter: "Share to Twitter/X",
      copyText: "Copy Text",
      downloadTitle: "Download Infographic",
      downloadSubtitle: "Print and display at work, home, or in your community.",
      previewLabel: "Infographic Preview",
      downloadButton: "Download Infographic (PDF)",
      finalMessage1: "One decision.",
      finalMessage2: "Thousands of lives.",
      finalMessage3: "Including yours.",
      toastPledgeTitle: "Thank you! 🎉",
      toastPledgeDesc: "You've pledged not to smoke while driving.",
      toastCopyTitle: "Copied!",
      toastCopyDesc: "Message copied to clipboard. Share it with your friends!",
      toastDownloadTitle: "Coming Soon!",
      toastDownloadDesc: "Infographic is being created. Stay tuned!",
      shareMessages: {
        whatsapp: "I just pledged not to smoke while driving. Smoking while driving isn't just stupid, it's also illegal! 23x more likely to crash. Let's be aware together! 🚗🚭",
        twitter: "I pledge not to smoke while driving. 🚗🚭 Smoking while driving = 23x more likely to crash + illegal! #StopSmokingWhileDriving #SafetyFirst",
        copy: "Smoking while driving: Stupid + Illegal. 23x more likely to crash. Be aware and share with your friends!",
      },
    },
  };

  const t = content[language];

  const handlePledge = () => {
    if (!hasPledged) {
      setHasPledged(true);
      setPledgeCount((prev) => prev + 1);
      toast({
        title: t.toastPledgeTitle,
        description: t.toastPledgeDesc,
      });
    }
  };

  const handleShare = (platform: "whatsapp" | "twitter" | "copy") => {
    if (platform === "whatsapp") {
      window.open(`https://wa.me/?text=${encodeURIComponent(t.shareMessages.whatsapp)}`, "_blank");
    } else if (platform === "twitter") {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(t.shareMessages.twitter)}`, "_blank");
    } else {
      navigator.clipboard.writeText(t.shareMessages.copy);
      toast({
        title: t.toastCopyTitle,
        description: t.toastCopyDesc,
      });
    }
  };

  const handleDownload = () => {
    toast({
      title: t.toastDownloadTitle,
      description: t.toastDownloadDesc,
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
            {t.title1} <span className="text-danger">{t.title2}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Pledge section */}
        <div className="bg-card border border-border rounded-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left side - Pledge button */}
            <div className="flex-1 text-center md:text-left">
              <Heart className={`w-16 h-16 mx-auto md:mx-0 mb-4 ${hasPledged ? "text-danger fill-danger" : "text-danger"}`} />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {t.pledgeTitle}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t.pledgeSubtitle}
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
                    {t.pledged}
                  </>
                ) : (
                  <>
                    <Heart className="w-5 h-5 mr-2" />
                    {t.pledgeButton}
                  </>
                )}
              </Button>
            </div>

            {/* Right side - Counter */}
            <div className="flex-shrink-0 text-center p-8 bg-secondary rounded-xl">
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                {t.totalPledge}
              </p>
              <p className={`text-5xl font-black ${hasPledged ? "animate-counter text-danger" : "text-foreground"}`}>
                {pledgeCount.toLocaleString(language === "id" ? "id-ID" : "en-US")}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{t.peoplePledged}</p>
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
                {t.shareTitle}
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">
              {t.shareSubtitle}
            </p>

            <div className="space-y-3">
              <Button
                onClick={() => handleShare("whatsapp")}
                className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t.shareWhatsapp}
              </Button>

              <Button
                onClick={() => handleShare("twitter")}
                className="w-full bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white font-bold"
              >
                <Share2 className="w-5 h-5 mr-2" />
                {t.shareTwitter}
              </Button>

              <Button
                onClick={() => handleShare("copy")}
                variant="outline"
                className="w-full font-bold"
              >
                {t.copyText}
              </Button>
            </div>
          </div>

          {/* Download section */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Download className="w-8 h-8 text-foreground" />
              <h3 className="text-xl font-bold text-foreground">
                {t.downloadTitle}
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">
              {t.downloadSubtitle}
            </p>

            {/* Infographic preview placeholder */}
            <div className="bg-secondary rounded-lg p-8 text-center mb-4">
              <div className="text-6xl mb-4">📊</div>
              <p className="text-muted-foreground text-sm">
                {t.previewLabel}
              </p>
            </div>

            <Button
              onClick={handleDownload}
              className="w-full bg-foreground text-background hover:bg-foreground/90 font-bold"
            >
              <Download className="w-5 h-5 mr-2" />
              {t.downloadButton}
            </Button>
          </div>
        </div>

        {/* Final message */}
        <div className="mt-12 text-center">
          <p className="text-2xl font-bold text-foreground mb-2">
            {t.finalMessage1} <span className="text-danger">{t.finalMessage2}</span>
          </p>
          <p className="text-muted-foreground">
            {t.finalMessage3}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;