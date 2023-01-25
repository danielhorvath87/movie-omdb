import { FC } from "react";
import { Helmet } from "react-helmet-async";

const SeoTags: FC = () => {
  const { href } = window.location;

  return (
    <Helmet>
      <title>OMDb API</title>
      <link rel="notImportant" href={href} />
      <link rel="canonical" href={href} />
      <meta property="og:title" content="OMDb API" />
    </Helmet>
  );
};

export default SeoTags;
