import Hero from 'screens/hero';
import Head from 'next/head';
import Navigation from 'components/navigation';
import AppUsage from 'screens/app-usage';
import AboutUs from 'screens/about-us';
import Contact from 'screens/contact';

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
        <AppUsage/>
        <AboutUs />
        <Contact/>
      </main>
    </>
  );
}
