
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Percent } from "lucide-react";

const CanadianBankPartners = () => {
  const canadianBanks = [
    { name: "RBC Banque Royale", logo: "🏛️", rate: "5.25%" },
    { name: "TD Canada Trust", logo: "🏦", rate: "5.35%" },
    { name: "Banque Scotia", logo: "🏪", rate: "5.30%" },
    { name: "BMO Banque de Montréal", logo: "🏢", rate: "5.28%" },
    { name: "CIBC", logo: "🏛️", rate: "5.40%" },
    { name: "Desjardins", logo: "🏦", rate: "5.20%" }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <Badge className="mb-4 px-4 py-2 bg-realestate-red/10 text-realestate-red">
            <Building2 className="w-4 h-4 mr-2" />
            PARTENAIRES FINANCIERS CANADIENS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nos Partenaires
            <span className="bg-gradient-to-r from-realestate-blue to-realestate-red bg-clip-text text-transparent">
              {" "}Bancaires
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accédez aux meilleures conditions hypothécaires grâce à nos partenariats avec les grandes institutions financières canadiennes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {canadianBanks.map((bank, index) => (
            <Card key={bank.name} className="p-6 hover:shadow-xl transition-all border-none shadow-lg" data-aos="fade-up" data-aos-delay={100 * index}>
              <CardContent className="text-center">
                <div className="text-4xl mb-4">{bank.logo}</div>
                <h3 className="text-lg font-bold mb-2">{bank.name}</h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Percent className="w-4 h-4 text-green-600" />
                  <span className="text-2xl font-bold text-green-600">{bank.rate}</span>
                </div>
                <p className="text-sm text-gray-600">Taux préférentiel négocié</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CanadianBankPartners;
