import { Container, Button, Grid, Text, Image } from '@chakra-ui/react';
import Link from 'next/link';

export default function Landing() {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={14} margin="auto" maxWidth="6xl">
      <Container mt="20">
        <Text mt="20" className="poppins" fontWeight="bold" fontSize="5xl" textDecoration="wavy">
          Hey, Libra Friends!
        </Text>
        
        <Text fontSize="lg" fontWeight="" className="poppins" mt="5" mb="5" color="gray.600" maxWidth="md">
          Join our over 100,000 readers and gain access to <span className="font-semibold">all our freebies!</span>{' '}
          Libras are the shock-absorbers of the Zodiac.The more shocking or alarming the news, the calmer the Libra will
          be.
        </Text>

        <Text mb="10" fontSize="lg" fontWeight="semibold" className="poppins">Finding the sense in our chaos.</Text>
        <Link href="/freebies">
          <a className="font-bold bg-black text-white py-3 px-5 text-lg rounded-sm hover:bg-libraOrange transition-all ease-in-out duration-200">GET THE FREEBIES</a>
        </Link>
      </Container>
      <Image mt="10" rounded="md" src="/home/friends1.jpg" />
    </Grid>
  );
}
