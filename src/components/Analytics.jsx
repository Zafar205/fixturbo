import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics component
const GoogleAnalytics = ({ trackingId = 'G-0C0XXT0XX7' }) => {
  const location = useLocation();

  useEffect(() => {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', trackingId, {
      page_title: document.title,
      page_location: window.location.href,
    });

    return () => {
      document.head.removeChild(script);
    };
  }, [trackingId]);

  useEffect(() => {
    // Track page views on route change
    if (window.gtag) {
      window.gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, [location, trackingId]);

  return null;
};

// Analytics component (Google Analytics only)
const Analytics = ({ 
  googleAnalyticsId = 'G-0C0XXT0XX7'
}) => {
  return <GoogleAnalytics trackingId={googleAnalyticsId} />;
};

export default Analytics;
export { GoogleAnalytics };
