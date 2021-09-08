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
        <h1>Permanently Closed</h1>
        <p>
          We are now permanently closed. Thank you to all the great people and doggies I got to work with over the years. Special thanks to my dogs Ollie and Chata who helped with teaching other dogs how to socialize. If anyone would like to contact me about non dog training matters - tyler@webguyty.com
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
