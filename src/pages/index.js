import React, { useState, useCallback, useEffect, useRef } from 'react';
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
  const [showAllPosts, setShowAllPosts] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const isFirstRender = useRef(true);

  useEffect(() => {
    function filterPosts() {
      navigate(searchValue ? `?search=${searchValue}` : '', { replace: true });

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
      setShowAllPosts(false);
    }

    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      debounce(filterPosts, 500)();
    }
  }, [searchValue, data.allMarkdownRemark.nodes]);

  const loadMore = useCallback(
    (e, click = false) => {
      if (
        !showAllPosts &&
        (document.body.getBoundingClientRect().bottom <= window.innerHeight ||
          click)
      ) {
        setTimeout(() => {
          setShowAllPosts(true);
        }, 500);
      }
    },
    [showAllPosts]
  );

  const renderPost = (isExternal, link, component) => {
    if (isExternal) {
      return (
        <a href={link} itemProp="url" className="post-link">
          {component}
        </a>
      );
    }

    return (
      <Link to={link} itemProp="url" className="post-link">
        {component}
      </Link>
    );
  };

  useEffect(() => {
    const params = queryString.parse(location.search);
    setSearchValue(params.search || '');
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', loadMore);

    return () => {
      document.removeEventListener('scroll', loadMore);
    };
  }, [loadMore]);

  const displayPosts = showAllPosts
    ? posts
    : posts.filter((post, index) => index < 5);

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <Search
        searchValue={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        postCount={posts.length}
      />
      {displayPosts.length === 0 ? (
        <p className="no-blog-post">No blog posts found.</p>
      ) : (
        <ol style={{ listStyle: `none` }}>
          {displayPosts.map((post) => {
            const title = post.frontmatter.title || post.fields.slug;
            const isExternal = !!post.frontmatter.url;
            const link = post.frontmatter.url || post.fields.slug;
            const tags = post.frontmatter.tags;

            return (
              <li key={post.fields.slug}>
                {renderPost(
                  isExternal,
                  link,
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      <h2>
                        <span itemProp="headline">
                          {`${title} ${isExternal ? '🔗' : ''}`}
                        </span>
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
                )}
              </li>
            );
          })}
        </ol>
      )}
      {!showAllPosts && posts.length > 5 && (
        <button
          type="button"
          tabIndex="-1"
          style={{
            width: '100%',
            color: '#fff',
            padding: '10px 0',
            borderRadius: '0.5rem',
            fontSize: 'var(--fontSize-4)',
            fontWeight: '600',
            fontFamily: 'var(--font-heading)',
            backgroundColor: '#17a973',
            border: 0,
            cursor: 'pointer',
          }}
          onClick={(e) => loadMore(e, true)}
        >
          Load More Posts
        </button>
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
