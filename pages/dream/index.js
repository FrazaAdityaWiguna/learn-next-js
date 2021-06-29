import React from "react";
import styles from "../../styles/Dream.module.css";
import Layout from "../../comps/Layout";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { dreams: data },
  };
};

const Dream = ({ dreams }) => {
  return (
    <Layout title='Member'>
      <h1>All Bigdream</h1>
      {dreams.map((dream) => (
        <Link href={`/dream/${dream.id}`} key={dream.id}>
          <a className={styles.single}>
            <h3>{dream.name}</h3>
          </a>
        </Link>
      ))}
    </Layout>
  );
};

export default Dream;
