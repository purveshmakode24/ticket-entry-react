import React from 'react';
import Nav from './Nav';

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
    </div>
  )
}

export default Layout