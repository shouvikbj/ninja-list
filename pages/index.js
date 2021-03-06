import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          sit commodi temporibus voluptate quidem corporis, provident corrupti
          atque fugit ipsam velit aut at, expedita facilis accusantium libero
          culpa quibusdam debitis.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          sit commodi temporibus voluptate quidem corporis, provident corrupti
          atque fugit ipsam velit aut at, expedita facilis accusantium libero
          culpa quibusdam debitis.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
};

export default Home;
