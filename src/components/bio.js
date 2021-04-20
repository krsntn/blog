/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;

  return (
    <div className="bio">
      <StaticImage
        src="../../content/assets/profile-pic.png"
        alt={author?.name || ``}
        placeholder="tracedSVG"
        backgroundColor="#ccc"
        layout="fixed"
        width={50}
        height={50}
        className="bio-avatar"
      />

      {author?.name && (
        <p>
          Written by <strong>{author.name.toLowerCase()}</strong>,{' '}
          {author?.summary || null}
        </p>
      )}
    </div>
  );
};

export default Bio;
