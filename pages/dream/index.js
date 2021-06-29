import React from "react";
import styles from "../../styles/Dream.module.css";
import Layout from "../../comps/Layout";

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
      <h1>BIG DREAM member</h1>
      {dreams.map((dream) => (
        <div key={dream.id}>
          <a className={styles.single}>
            <h3>{dream.name}</h3>
          </a>
        </div>
      ))}
    </Layout>
  );
};

export default Dream;
