import React from "react";
import Layout from "../../comps/Layout";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

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

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { dream: data },
  };
};

const Details = ({ dream }) => {
  return (
    <Layout>
      <h1>{dream.name}</h1>
      <p>{dream.email}</p>
      <p>{dream.website}</p>
      <p>{dream.address.city}</p>
    </Layout>
  );
};

export default Details;
