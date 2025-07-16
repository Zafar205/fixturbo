import React, { useEffect, useState } from "react";
import Head from 'next/head';
import dynamic from 'next/dynamic';
import HeaderTwo from "../src/components/HeaderTwo";
import HeroTwo from "../src/components/HeroTwo";
import ServiceAreaTwo from "../src/components/ServiceAreaTwo";
import AboutTwo from "../src/components/AboutTwo";
import CounterTwo from "../src/components/CounterTwo";
import PortfolioTwo from "../src/components/PortfolioTwo";
import WhyChooseUsOne from "../src/components/WhyChooseUsOne";
import ProcessAreaTwo from "../src/components/ProcessAreaTwo";
import CTAAreaTwo from "../src/components/CTAAreaTwo";
import PricingPlanTwo from "../src/components/PricingPlanTwo";
import AppointmentAreaTwo from "../src/components/AppointmentAreaTwo";
import TeamAreaTwo from "../src/components/TeamAreaTwo";
import ClientAreaTwo from "../src/components/ClientAreaTwo";
import FaqAreaTwo from "../src/components/FaqAreaTwo";
import BlogAreaTwo from "../src/components/BlogAreaTwo";
import FooterAreaTwo from "../src/components/FooterAreaTwo";
import Preloader from "../src/helper/Preloader";

// Dynamically import ScrollToTop to avoid SSR issues
const ScrollToTop = dynamic(() => import('react-scroll-to-top'), {
  ssr: false
});

const HomePage = () => {
  let [active, setActive] = useState(true);
  
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://carcheck.store/#organization",
        "name": "Car Check Store",
        "alternateName": ["CarCheckStore", "Car Check", "Vehicle Check Store"],
        "url": "https://carcheck.store",
        "logo": {
          "@type": "ImageObject",
          "url": "https://carcheck.store/assets/img/logo.svg",
          "width": 300,
          "height": 100
        },
        "description": "Car Check Store is the leading provider of instant vehicle history reports and VIN check services.",
        "foundingDate": "2024",
        "knowsAbout": ["Vehicle History Reports", "VIN Check", "Car Inspection", "Auto Reports", "Vehicle Verification"],
        "areaServed": {
          "@type": "Country",
          "name": "United Kingdom"
        },
        "serviceType": "Vehicle History Reports"
      },
      {
        "@type": "WebSite",
        "@id": "https://carcheck.store/#website",
        "url": "https://carcheck.store",
        "name": "Car Check Store",
        "description": "Get instant vehicle history reports and VIN checks",
        "publisher": {
          "@id": "https://carcheck.store/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://carcheck.store/?search={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Car Check Store - #1 Vehicle History Reports & VIN Check Services | Instant Car Inspection Reports</title>
        <meta 
          name="description" 
          content="Car Check Store provides instant, comprehensive vehicle history reports and car inspection services. Get detailed VIN checks, accident records, ownership history, and market value analysis. Your trusted car check store for used car buying decisions." 
        />
        <meta 
          name="keywords" 
          content="car check store, VIN check, vehicle history report, car inspection report, VIN number lookup, vehicle inspection, car history check, auto report, VIN decoder, vehicle records, car buying report, accident history, title check, ownership records, vehicle verification, auto inspection" 
        />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Car Check Store - #1 Vehicle History Reports & VIN Check Services" />
        <meta property="og:description" content="Car Check Store provides instant, comprehensive vehicle history reports and car inspection services." />
        <meta property="og:image" content="https://carcheck.store/card.png" />
        <meta property="og:url" content="https://carcheck.store" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Car Check Store" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Car Check Store - #1 Vehicle History Reports & VIN Check Services" />
        <meta name="twitter:description" content="Car Check Store provides instant, comprehensive vehicle history reports and car inspection services." />
        <meta name="twitter:image" content="https://carcheck.store/card.png" />
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Car Check Store" />
        <link rel="canonical" href="https://carcheck.store" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>

      {/* Preloader */}
      {active === true && <Preloader />}

      {/* Scroll To Top */}
      <ScrollToTop smooth color="#E8092E" />

      {/* Header Two */}
      <HeaderTwo />

      {/* Hero Two */}
      <HeroTwo />

      {/* Service Area Two */}
      <ServiceAreaTwo />

      {/* About Two */}
      <div className="about-area-2 bg-smoke">
        <AboutTwo />
      </div>

      {/* Counter Two */}
      <CounterTwo />

      {/* Portfolio Two */}
      <PortfolioTwo />

      {/* Why Choose Us One */}
      <WhyChooseUsOne />

      {/* Process Area Two */}
      <ProcessAreaTwo />

      {/* CTA Area Two */}
      <CTAAreaTwo />

      {/* Pricing Plan Two */}
      <PricingPlanTwo />

      {/* Appointment Area Two */}
      <AppointmentAreaTwo />

      {/* Team Area Two */}
      <TeamAreaTwo />

      {/* Client Area Two */}
      <ClientAreaTwo />

      {/* Faq Area Two */}
      <FaqAreaTwo />

      {/* Blog Area Two */}
      <BlogAreaTwo />

      {/* Footer Area Two */}
      <FooterAreaTwo />
    </>
  );
};

export default HomePage;
