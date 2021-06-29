import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Ninja List | {props.title}</title>
      </Head>
      <div className='content'>
        <Navbar />
        {props.children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
