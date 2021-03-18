/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from "next/head";
import Link from "next/link";

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>Pacific Life Design System - Component Library</h1>
    <p>
      <Link href="/demos">
        <a>Demos</a>
      </Link>
    </p>
  </div>
);

export default Home;
