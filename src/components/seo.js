/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
      link={[
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          sizes: '57x57',
          href: 'favicons/icon-57.png',
        },
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          sizes: '60x60',
          href: 'favicons/icon-60.png',
        },
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          sizes: '72x72',
          href: 'favicons/icon-72.png',
        },
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          sizes: '76x76',
          href: 'favicons/icon-76.png',
        },
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          sizes: '114x114',
          href: 'favicons/icon-114.png',
        },
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          sizes: '120x120',
          href: 'favicons/icon-120.png',
        },
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          sizes: '144x144',
          href: 'favicons/icon-144.png',
        },
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          sizes: '152x152',
          href: 'favicons/icon-152.png',
        },
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          sizes: '167x167',
          href: 'favicons/icon-167.png',
        },
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          sizes: '180x180',
          href: 'favicons/icon-180.png',
        },
      ]}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
