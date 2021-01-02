import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Tag from '../components/Tag';
import Search from '../components/Search';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const [posts, setPosts] = useState(data.allMarkdownRemark.nodes);
  const [searchValue, setSearchValue] = useState('');

  const onSearch = (event) => {
    const { value } = event.target;
    setSearchValue(value);

    // filter posts
    const allPosts = data.allMarkdownRemark.nodes;
    const filteredPosts = allPosts.filter((post) =>
      post.frontmatter.title.toLowerCase().includes(value.toLowerCase())
    );
    setPosts(filteredPosts);
  };

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <Search searchValue={searchValue} onChange={onSearch} />
      {posts.length === 0 ? (
        <p className="no-blog-post">No blog posts found.</p>
      ) : (
        <ol style={{ listStyle: `none` }}>
          {posts.map((post) => {
            const title = post.frontmatter.title || post.fields.slug;
            const link = post.frontmatter.url || post.fields.slug;
            const tags = post.frontmatter.tags;

            return (
              <li key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={link} itemProp="url">
                        <span
                          itemProp="headline"
                          data-external={!!post.frontmatter.url}
                        >
                          {title}
                        </span>
                      </Link>
                    </h2>
                    <small>{post.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                  <div>
                    {tags?.map((tag, index) => (
                      <Tag key={index}>{tag}</Tag>
                    ))}
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      )}
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          url
          tags
        }
      }
    }
  }
`;
