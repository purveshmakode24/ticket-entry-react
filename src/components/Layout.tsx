import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Layout = (props: any) => {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <main role="main" style={{textAlign: 'left'}}>
            {props.children}
          </main>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout