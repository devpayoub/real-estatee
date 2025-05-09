
const BenefitsSection = () => {
  return (
    <div className="w-full py-16 px-6 md:px-12 bg-white">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="flex-1 relative">
          <div className="relative mx-auto max-w-[380px]">
            <div className="absolute top-6 right-[-10px] bg-realestate-tag text-white text-xs py-1 px-3 rounded-full">
              SALE
            </div>
            <img 
              src="https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Modern house" 
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>
        
        <div className="flex-1">
          <h2 className="text-3xl font-bold">
            Sell For More Than <br />
            The Home <span className="text-realestate-blue">Next Door</span>
          </h2>
          
          <p className="mt-4 text-gray-600 max-w-[500px]">
            Ready to sell? Get an instant estimate of your home's value. Our market analysis data will help you get the perfect price for your property.
          </p>
          
          <div className="mt-10 space-y-6">
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-blue">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                  <line x1="4" x2="4" y1="22" y2="15"></line>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">The Ability to Instantly Accept Early</h3>
                <p className="text-gray-600 mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus felis eget ornare lacinia. In varius tortor vel risus tincidunt pulvinar.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-realestate-blue">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">The Ability to Instantly Accept Early</h3>
                <p className="text-gray-600 mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus felis eget ornare lacinia. In varius tortor vel risus tincidunt pulvinar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
