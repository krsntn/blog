import React, { useState, useCallback, useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import queryString from 'query-string';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Tag from '../components/Tag';
import Search from '../components/Search';

let timeout;
function debounce(func, duration) {
  return function (...args) {
    const effect = () => {
      timeout = null;
      return func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(effect, duration);
  };
}

const BlogIndex = ({ data, location, navigate }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const [posts, setPosts] = useState(data.allMarkdownRemark.nodes);
  const [searchValue, setSearchValue] = useState('');

  const onTagClick = useCallback((tag) => {
    setSearchValue((prevValue) => `${prevValue ? prevValue + ' ' : ''}${tag}`);
  }, []);

  useEffect(() => {
    function filterPosts() {
      navigate(searchValue ? `?search=${searchValue}` : '');

      const searchValues = searchValue
        .toLowerCase()
        .split(' ')
        .filter((x) => x !== '');

      const allPosts = data.allMarkdownRemark.nodes;
      const filteredPosts = allPosts.filter((post) => {
        const postKeywords = post.frontmatter.title
          .toLowerCase()
          .concat(' ', post.frontmatter.tags?.join(' ') || '');

        return searchValues.every((value) => postKeywords.includes(value));
      });

      setPosts(searchValue === '' ? allPosts : filteredPosts);
    }

    debounce(filterPosts, 500)();
  }, [searchValue, data.allMarkdownRemark.nodes]);

  useEffect(() => {
    const params = queryString.parse(location.search);
    setSearchValue(params.search || '');
  }, []);

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <Search
        searchValue={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        postCount={posts.length}
      />
      {posts.length === 0 ? (
        <p className="no-blog-post">No blog posts found.</p>
      ) : (
        <ol style={{ listStyle: `none` }}>
          {posts.map((post) => {
            const title = post.frontmatter.title || post.fields.slug;
            const isExternal = !!post.frontmatter.url;
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
                      {isExternal ? (
                        <a href={link} itemProp="url">
                          <span
                            itemProp="headline"
                            data-external={!!post.frontmatter.url}
                          >
                            {title}
                          </span>
                        </a>
                      ) : (
                        <Link to={link} itemProp="url">
                          <span
                            itemProp="headline"
                            data-external={!!post.frontmatter.url}
                          >
                            {title}
                          </span>
                        </Link>
                      )}
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
                      <Tag key={index} onClick={onTagClick}>
                        {tag}
                      </Tag>
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
