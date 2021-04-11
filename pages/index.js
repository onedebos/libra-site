import Head from 'next/head';
import Menu from '../components/menu';
import Landing from '../components/landing';
import { Container } from '@chakra-ui/react';
import TheBalancedLibra from '../components/theBalancedLibra';
import DearLibraFriends from '../components/dearLibraFriends';
import Quote from '../components/quote';
import { QUOTES } from '../utils/constants';
import YouWillLoveThese from '../components/youWillLoveThese';
import Instagram from '../components/instagram';
import Poll from '../components/poll';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2 bg-libraPurple">
      <Head>
        <title>Libra Friends</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="border-b w-full mt-3">
        <Menu />
      </div>

      <Container maxWidth="6xl">
        <Landing />
      </Container>

      <TheBalancedLibra />
      <DearLibraFriends />
      <YouWillLoveThese />
      <Quote quote={QUOTES.QUOTE1} additionalClasses="quote-bg-1" />
      <Instagram />
      <Poll />
      <Footer />
    </div>
  );
}
