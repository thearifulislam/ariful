import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const defaultTitle = 'Ariful Creator Studio | Portfolio, Graphic Design, Branding, UI/UX, Bangladesh';
const defaultDescription = 'Ariful Creator Studio: Professional portfolio of Ariful Islam. Expert in graphic design, logo design, branding, UI/UX, business card, letterhead, and creative digital solutions. Based in Bangladesh.';
const defaultKeywords = 'Ariful Creator Studio, arifulcreatorstudio, Ariful Islam, portfolio, graphic design, logo design, branding, UI/UX, business card, letterhead, creative, Bangladesh, designer, freelancer, digital, web design, best designer, creative studio, hire designer, top graphic designer, portfolio website, Ariful, Creator Studio, Ariful GFX, Ariful Islam portfolio, graphic designer Bangladesh, graphic design portfolio, creative portfolio, digital portfolio, hire graphic designer, best portfolio, modern design, professional design, creative agency, creative portfolio, portfolio inspiration, portfolio site, portfolio website, portfolio designer, portfolio graphic designer, portfolio creative, portfolio branding, portfolio UI/UX, portfolio business card, portfolio letterhead, portfolio logo, portfolio web design, portfolio Bangladesh, portfolio Ariful, portfolio Ariful Islam, portfolio Ariful Creator Studio';
const defaultImage = '/profile.jpg';
const defaultUrl = 'https://arifulcreatorstudio.com/';

const Seo: React.FC<SeoProps> = ({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
  image = defaultImage,
  url = defaultUrl,
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="Ariful Islam" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:site" content="@arifulgfx" />
    <link rel="canonical" href={url} />
  </Helmet>
);

export default Seo; 