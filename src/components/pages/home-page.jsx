// import React from 'react'
import HeroSection from "../sections/hero-section";
import Header, { Footer } from "../header-footer";

const HomePage = () => {
  return (
    <>
      {/* HomePage except Footer */}
      <Header />
      <div className="max-w-[1920px] aspect-video block mx-auto font-titillium px-10">
        {/* Main section */}
        <main>
          <HeroSection />
        </main>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default HomePage;
