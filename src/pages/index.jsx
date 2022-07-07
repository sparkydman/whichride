import Hero from 'screens/hero';
import Head from 'next/head';
import Navigation from 'components/navigation';
import AppUsage from 'screens/app';
import AboutUs from 'screens/about';
import Contact from 'screens/contact';
import Footer from 'components/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Whichride home page</title>
        <meta name='description' content='Welcome to whichride' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Navigation />
        <Hero />
        <AppUsage />
        <AboutUs />
        <Contact /> 
      </main>
      <Footer />
    </>
  );
}
