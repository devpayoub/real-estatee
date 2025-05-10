
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, Tag, Clock, ArrowLeft } from "lucide-react";
import { useEffect } from "react";

// Sample blog post data - in a real app, this would come from an API
const blogPosts = [
  {
    id: "1",
    title: "10 Conseils pour les Acheteurs d'une Première Maison",
    excerpt: "Acheter votre première maison peut être intimidant, mais avec ces conseils, vous serez prêt pour réussir.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    author: "Kais Khayati",
    date: "5 Mai 2025",
    category: "Achat",
    readTime: "5 min de lecture",
    content: `
      <p class="mb-4">Acheter votre première maison est une étape importante dans la vie, mais cela peut aussi être un processus complexe et écrasant. Avec une planification minutieuse et les bonnes informations, vous pouvez naviguer dans ce voyage en toute confiance.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">1. Vérifiez Votre Cote de Crédit</h2>
      <p class="mb-4">Votre cote de crédit joue un rôle crucial dans la détermination de vos options de prêt hypothécaire et des taux d'intérêt. Avant de commencer à chercher une maison, vérifiez votre rapport de crédit et prenez des mesures pour améliorer votre score si nécessaire. Visez un score d'au moins 620, bien qu'un score supérieur à 740 vous qualifiera pour les meilleurs taux.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">2. Déterminez Votre Budget</h2>
      <p class="mb-4">Évaluez honnêtement vos finances pour déterminer quelle maison vous pouvez vous permettre. La règle générale est que vos dépenses de logement ne devraient pas dépasser 28 % de votre revenu mensuel brut. N'oubliez pas de considérer les coûts supplémentaires au-delà du paiement hypothécaire, tels que les taxes foncières, l'assurance, les services publics et l'entretien.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">3. Économisez pour un Acompte</h2>
      <p class="mb-4">Bien que certains prêts permettent des acomptes aussi bas que 3,5 %, un acompte de 20 % vous aide à éviter l'assurance hypothécaire privée (PMI) et réduit votre paiement mensuel. Commencez à économiser tôt et explorez les programmes d'aide à l'acompte qui peuvent être disponibles pour les acheteurs d'une première maison.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">4. Obtenez une Pré-Approbation pour un Prêt Hypothécaire</h2>
      <p class="mb-4">Avant de commencer à regarder des maisons, obtenez une pré-approbation pour un prêt hypothécaire. Cela vous donne une idée claire de combien vous pouvez emprunter et rend votre offre plus compétitive sur le marché. Comparez les offres de différents prêteurs pour comparer les taux d'intérêt et les conditions.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">5. Considérez Toutes les Dépenses de Logement</h2>
      <p class="mb-4">Le paiement hypothécaire n'est qu'une partie des coûts de propriété. Prévoyez les taxes foncières, l'assurance habitation, les possibles frais de copropriété, les services publics, l'entretien et les réparations. Une règle générale est de budgétiser 1 à 3 % de la valeur de votre maison annuellement pour l'entretien et les réparations.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">6. Recherchez les Quartiers</h2>
      <p class="mb-4">L'emplacement de votre maison affecte non seulement votre style de vie, mais aussi la valeur de votre propriété au fil du temps. Recherchez des quartiers pour la sécurité, la qualité des écoles, les commodités, les temps de trajet et les plans de développement futurs. Visitez les quartiers potentiels à différents moments de la journée pour en avoir une idée complète.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">7. Établissez une Liste d'Incontournables</h2>
      <p class="mb-4">Avant de commencer à visiter des maisons, créez une liste de caractéristiques indispensables par rapport aux équipements agréables à avoir. Cela vous aide à concentrer votre recherche et à éviter d'être influencé par des caractéristiques attrayantes mais inutiles qui pourraient étirer votre budget.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">8. Engagez un Agent Immobilier Compétent</h2>
      <p class="mb-4">Un agent expérimenté spécialisé dans l'aide aux acheteurs d'une première maison peut vous guider à travers le processus, vous aider à trouver des propriétés adaptées, négocier en votre nom et vous aider avec les formalités administratives. Leur expertise peut être inestimable, surtout pour les nouveaux venus sur le marché immobilier.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">9. Obtenez une Inspection de la Maison</h2>
      <p class="mb-4">Ne sautez jamais l'inspection de la maison. Un inspecteur professionnel peut identifier des problèmes avec la maison qui pourraient ne pas être apparents lors d'une visite. Cette information peut vous aider à négocier des réparations ou des ajustements de prix, ou même à décider d'abandonner une propriété problématique.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">10. Planifiez pour l'Avenir</h2>
      <p class="mb-4">Considérez vos plans à long terme lors de l'achat de votre première maison. Combien de temps avez-vous l'intention d'y vivre ? L'espace convient-il à une croissance familiale potentielle ? La propriété est-elle susceptible de prendre de la valeur ? Ces considérations peuvent vous aider à faire un achat plus stratégique.</p>
      
      <p class="mt-8">En suivant ces conseils, vous serez mieux préparé pour le voyage d'achat de votre première maison. Rappelez-vous, la propriété immobilière est un investissement important, alors prenez votre temps, faites vos recherches et prenez des décisions éclairées. Avec une planification et une guidance appropriées, vous pouvez trouver une maison qui répond à vos besoins et correspond à votre budget.</p>
    `
  },
  {
    id: "2",
    title: "Comment Préparer Votre Maison pour une Vente Rapide",
    excerpt: "Apprenez comment rendre votre propriété plus attrayante pour les acheteurs potentiels et vendre plus rapidement.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000&auto=format&fit=crop",
    author: "Émilie Martin",
    date: "28 Avril 2025",
    category: "Vente",
    readTime: "6 min de lecture",
    content: `
      <p class="mb-4">Lors de la vente de votre maison, les premières impressions comptent énormément. Une mise en scène appropriée peut mettre en valeur les points forts de votre maison, minimiser ses faiblesses et aider les acheteurs potentiels à s'imaginer vivre dans l'espace.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Désencombrez Soigneusement</h2>
      <p class="mb-4">La première étape et la plus cruciale dans la mise en scène d'une maison est le désencombrement. Retirez les objets personnels, les meubles excédentaires et tout ce qui fait paraître les espaces plus petits ou désorganisés. Envisagez de louer un garde-meuble pour les objets que vous souhaitez conserver mais dont vous n'avez pas besoin dans la maison pendant qu'elle est sur le marché.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Nettoyez Tout en Profondeur</h2>
      <p class="mb-4">Une maison impeccable donne l'impression que la propriété a été bien entretenue. Portez une attention particulière aux cuisines et aux salles de bains. Nettoyez les fenêtres pour permettre un maximum de lumière naturelle, nettoyez à la vapeur les tapis et n'oubliez pas les zones souvent négligées comme les plinthes et les ventilateurs de plafond.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Faites les Réparations Nécessaires</h2>
      <p class="mb-4">Réparez tout ce qui est cassé ou visiblement usé – robinets qui fuient, carreaux fissurés, murs abîmés ou portes qui ne ferment pas correctement. Ces petits problèmes peuvent signaler aux acheteurs que la maison n'a pas été bien entretenue et pourrait avoir des problèmes plus importants.</p>
    `
  }
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(post => post.id === id);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Initialize AOS animations
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-6 py-24">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Article de blog non trouvé</h1>
            <Link to="/blog">
              <Button className="mt-4 bg-realestate-red hover:bg-realestate-darkred">Retour au Blog</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        <article className="container mx-auto px-6 py-8">
          {/* Back to blog link */}
          <Link 
            to="/blog" 
            className="inline-flex items-center text-realestate-red mb-6 hover:underline"
            data-aos="fade-right"
          >
            <ArrowLeft size={16} className="mr-2" />
            Retour aux articles
          </Link>
          
          {/* Post header */}
          <div className="mb-8" data-aos="fade-up">
            <Badge className="bg-realestate-lightred text-realestate-red mb-4">
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex flex-wrap items-center text-gray-500 text-sm gap-4 mb-6">
              <div className="flex items-center">
                <User size={16} className="mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center">
                <Tag size={16} className="mr-1" />
                <span>{post.category}</span>
              </div>
            </div>
          </div>
          
          {/* Featured image */}
          <div 
            className="w-full h-[400px] rounded-lg overflow-hidden mb-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Post content */}
          <div 
            className="prose prose-lg max-w-none"
            data-aos="fade-up"
            data-aos-delay="200"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Author bio */}
          <div 
            className="mt-12 p-6 bg-realestate-lightred rounded-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage 
                  src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop`}
                  alt={post.author}
                />
              </Avatar>
              <div>
                <h4 className="text-xl font-semibold mb-1">À propos de {post.author}</h4>
                <p className="text-gray-600">
                  Expert immobilier avec plus de 10 ans d'expérience aidant les clients à trouver leurs maisons parfaites et propriétés d'investissement.
                </p>
              </div>
            </div>
          </div>
        </article>
        
        <TestimonialsCarousel />
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
