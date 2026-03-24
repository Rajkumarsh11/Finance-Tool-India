import { useEffect } from 'react';

const SEO = ({ title, description, schema }) => {
  useEffect(() => {
    // Update document title
    document.title = title || 'FinTools India | Precision Financial Calculators';

    // Update meta description
    const updateMetaTag = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        document.getElementsByTagName('head')[0].appendChild(meta);
      }
    };

    if (description) {
      updateMetaTag('description', description);
    }

    // Inject JSON-LD Schema if provided
    if (schema) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (script) {
        script.innerHTML = JSON.stringify(schema);
      } else {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.innerHTML = JSON.stringify(schema);
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    }
    
    // Update Open Graph tags for better SEO
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    
  }, [title, description, schema]);

  return null;
};

export default SEO;
