import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem in porro eius deleniti totam dignissimos atque omnis, tempore deserunt quos quo labore, accusamus quisquam temporibus?</p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit molestiae nihil officiis dignissimos totam non eum doloremque maxime, expedita iure quidem, modi necessitatibus explicabo veniam eius nesciunt exercitationem quisquam
        rem! Dignissimos porro aspernatur accusantium, veniam sit ex reiciendis ipsum quis.
      </p>
      <Link href='/dream'>
        <a className={styles.btn}> See Member</a>
      </Link>
    </div>
  );
}
