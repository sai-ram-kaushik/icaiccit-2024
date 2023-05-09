import "../styles/globals.css";
import AcademicPartners from "../components/AcademicPartners";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AICCIT-2023</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/aiccit_logo.png " />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <AcademicPartners />
      <Footer />
    </>
  );
}
