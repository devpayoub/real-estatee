
const FeatureCard = ({ iconUrl, title }: { iconUrl: string; title: string }) => (
  <div className="flex flex-col items-center p-5 rounded-lg hover:bg-white hover:shadow-md transition-all cursor-pointer">
    <img src={iconUrl} alt={title} className="w-16 h-16 object-contain" />
    <p className="mt-3 font-medium text-center">{title}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      iconUrl: "https://via.placeholder.com/64/000000/FFFFFF/?text=Key",
      title: "Remote Lock Controls"
    },
    {
      iconUrl: "https://via.placeholder.com/64/000000/FFFFFF/?text=Power",
      title: "Remote Controls"
    },
    {
      iconUrl: "https://via.placeholder.com/64/000000/FFFFFF/?text=AC",
      title: "Remote Air Conditioner"
    },
    {
      iconUrl: "https://via.placeholder.com/64/000000/FFFFFF/?text=Smart",
      title: "Connect Smart Home"
    },
    {
      iconUrl: "https://via.placeholder.com/64/000000/FFFFFF/?text=Pool",
      title: "Connect Pool"
    },
    {
      iconUrl: "https://via.placeholder.com/64/000000/FFFFFF/?text=Garden",
      title: "Smart Garden"
    }
  ];
  
  return (
    <div className="w-full py-16 px-6 md:px-12 bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} iconUrl={feature.iconUrl} title={feature.title} />
          ))}
        </div>
        
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
            alt="Modern house" 
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
          />
          <div className="absolute right-5 top-[35%] flex flex-col gap-2">
            <div className="bg-white p-2 rounded-lg shadow-md flex items-center gap-2">
              <div className="bg-gray-100 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-blue">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <span className="text-sm">3 Beds</span>
            </div>
            <div className="bg-white p-2 rounded-lg shadow-md flex items-center gap-2">
              <div className="bg-gray-100 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-blue">
                  <path d="M22 2H2v20h20V2Z"></path>
                  <path d="M22 8H2"></path>
                  <path d="M8 2v20"></path>
                </svg>
              </div>
              <span className="text-sm">2 Bath</span>
            </div>
            <div className="bg-white p-2 rounded-lg shadow-md flex items-center gap-2">
              <div className="bg-gray-100 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-blue">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                </svg>
              </div>
              <span className="text-sm">1500 sq ft</span>
            </div>
            <div className="bg-white p-2 rounded-lg shadow-md flex items-center gap-2">
              <div className="bg-gray-100 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-blue">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <span className="text-sm">Atlanta</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
