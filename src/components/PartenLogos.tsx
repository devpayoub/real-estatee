import Slider from 'react-infinite-logo-slider'
import { Star } from "lucide-react";

const PartenLogos = () => {
    return (
//         <div className="relative flex flex-col w-full pt-28 pb-16 px-6 md:px-12 overflow-hidden">
//         {/* Moving Background Images */}
//         <div className="absolute inset-0 opacity-70">
//           <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/30"></div>
          
//           <div className="relative overflow-hidden w-full h-screen">
//     {/* Animated strip of 3 images */}
//     <div
//       className="flex w-[300%] h-full animate-slide-x"
//       style={{
//         animation: 'slide-x 20s linear infinite',
//       }}
//     >
//       <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('/logos/logo1.png')` }} />
//       <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('/logos/logo2.png')` }} />
//       <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('/logos/logo3.png')` }} />
//       <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('/logos/logo4.png')` }} />
//       <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('/logos/logo5.png')` }} />

//     </div>
//   </div>
//         </div>
//     </div>
        <>
        <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-realestate-blue/10 to-realestate-red/10 rounded-full mb-4">
                <Star className="w-4 h-4 text-realestate-blue" />
                <span className="text-realestate-blue font-semibold text-sm">PARTENAIRES D’AFFAIRES</span>
            </div>
         <div className="w-full overflow-hidden gap-2 px-6 py-2 bg-gradient-to-r from-realestate-blue/10 to-realestate-red/10  mb-2">
            <Slider
                width="250px"
                duration={40}
                pauseOnHover={true}
                blurBorders={false}
                blurBorderColor={'#fff'}
            >
                <Slider.Slide><img src="/logos/logo1.png" alt="any" className='w-36' /></Slider.Slide>
                <Slider.Slide><img src="/logos/logo2.png" alt="any" className='w-36' /></Slider.Slide>
                <Slider.Slide><img src="/logos/logo3.png" alt="any" className='w-36' /></Slider.Slide>
                <Slider.Slide><img src="/logos/logo4.png" alt="any" className='w-36' /></Slider.Slide>
                <Slider.Slide><img src="/logos/logo5.png" alt="any" className='w-36' /></Slider.Slide>
                <Slider.Slide><img src="/logos/logo6.png" alt="any" className='w-36' /></Slider.Slide>
                <Slider.Slide><img src="/logos/logo7.png" alt="any" className='w-36' /></Slider.Slide>
            </Slider>
        </div>
        </div>

        </>
    );
};


export default PartenLogos;
  