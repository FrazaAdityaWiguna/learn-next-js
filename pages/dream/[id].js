import React from "react";
import Layout from "../../comps/Layout";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = res.json();

  const paths = data.map((dream) => {
    return {
      params: { id: dream.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

const Details = () => {
  return (
    <Layout>
      <h1>Details Page</h1>
    </Layout>
  );
};

export default Details;
