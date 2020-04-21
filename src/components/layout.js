import React from 'react';
import PropTypes from 'prop-types';
// import { useStaticQuery, graphql } from 'gatsby';

import '../sass/main.scss';
import Menu from './layout/Menu';
import Footer from './layout/Footer';

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <>
      <Menu />
      <div className='temp-closure'>
        <h1>Temporary Closure</h1>
        <p>
          We are currently closed due to Coronavirus. Please check back soon,
          hopefully we can get back to normal operations in the near future!
          Stay safe.
        </p>
      </div>
      <main>
        <div className='content'>
          <main>{children}</main>
        </div>
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
