import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({ 
  title, 
  description, 
  image = "/images/hero-bg.png", 
  url = "https://midnightdev.dev", 
  type = "website" 
}: SEOProps) {
  const siteTitle = "Midnight Dev | Enterprise SaaS & AI Marketing";
  const fullTitle = title === siteTitle ? title : `${title} | Midnight Dev`;
  const fullUrl = url.startsWith("http") ? url : `https://midnightdev.dev${url}`;
  const fullImage = image.startsWith("http") ? image : `https://midnightdev.dev${image}`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />
    </Helmet>
  );
}
