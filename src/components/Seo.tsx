import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

const Seo: React.FC<SeoProps> = ({ title, description, keywords, ogImage, ogUrl }) => {
  const siteName = "Ariful GFX";
  const fullTitle = `${title} | ${siteName}`;
  
  // Use a full URL for production. This should be replaced with your actual domain and a proper OG image path.
  const baseUrl = "https://your-domain.com"; // Replace with your actual domain
  const finalOgImage = ogImage ? `${baseUrl}${ogImage}` : `${baseUrl}/og-image.png`;
  const finalOgUrl = ogUrl ? `${baseUrl}${ogUrl}` : baseUrl;

  return (
    <Helmet>
      {/* Standard SEO Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph Tags for social media sharing */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalOgUrl} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalOgImage} />
      <meta name="twitter:creator" content="@arifulcreator" />
    </Helmet>
  );
};

export default Seo; 