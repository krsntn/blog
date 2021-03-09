import React from 'react';
import { Link } from 'gatsby';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <div
      style={{
        background: `url(/images/background.jpg) top center / 100% auto no-repeat`,
      }}
    >
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className="global-header">
          <h1 className="main-heading">
            <Link to="/" tabIndex="-1">
              {title}
            </Link>
          </h1>
        </header>
        <main>{children}</main>
        <footer>
          2020, Crafted by
          {` `}
          <a href="https://dev.krsn.xyz">karson</a>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
