import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ children, location, description, title, image }) => {
  return (
    <Helmet titleTemplate={`%s | Home`}>
      <html lang="en" />
      <title>{title}</title>
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />
      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Homescreen for The Wonderful World of Dogs"
      />
      {/* Open Graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || "/logo.svg"} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:site_name" content="Home" key="ogsitename" />
      <meta property="og:description" content={description} key="ogdesc" />
      {children}
    </Helmet>
  );
};

export default SEO;
