import React from 'react';
import HeroSection from '../components/HeroSection';
import KidsPromoSection from '../components/KidsPromoSection';
import Future from '../components/Future';
import Empower from '../components/Empower';

function Home() {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <div className="w-full">
      <HeroSection/>
      <KidsPromoSection/>
      <Future/>
      <Empower/>
    </div>
  );
}

export default Home; 