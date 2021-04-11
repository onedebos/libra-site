import { Container, Button, Grid, Text, Image } from '@chakra-ui/react';
import Link from 'next/link';

export default function Landing() {
  return (
    <Grid className="dropping-svg-bg" templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)"]} gap={14} margin="auto" maxWidth="6xl">
      <Container mt={["0","10"]}>
        <Text mt={["3", "10"]}
          fontWeight="bold" fontSize={["4xl", "6xl"]} className="playfair" textDecoration="wavy" textAlign="center">
          Hey, <br />Libra Friends!
        </Text>

        <Text backgroundColor="yellow.500" padding="5" rounded="md" fontSize={["xl", "3xl"]} margin="auto"  mt="5" mb="5" color="white" maxWidth="xl" textAlign="center">
          Join our over 100,000 readers and gain access to <span className="font-semibold">all our freebies!</span>{' '}
        </Text>
{/* 
        <Text className="playfair" fontWeight="semi-bold" fontSize="xl" margin="auto"  mt="5" mb="5" color="gray.600" maxWidth="lg" textAlign="center">
        Libras are the shock-absorbers of the Zodiac.The more shocking or alarming the news, the calmer the Libra will
          be.
          
        </Text> */}

        {/* <Text mt="2" textAlign="center" fontStyle="italic">- Libra Friends</Text> */}

        <Text mb="10" fontSize="lg"  fontWeight="semibold"  textAlign="center">
          Finding the sense in our chaos.
        </Text>
        <Container margin="auto" textAlign="center">
        <Link href="/freebies">
          <a className="font-bold bg-black text-white py-3 px-5 text-lg rounded-sm hover:bg-libraOrange transition-all ease-in-out duration-200">
            GET THE FREEBIES
          </a>
        </Link>
        </Container>
      </Container>
      <Container textAlign="center">
      <Image mt="5" rounded="md" src="/home/friends1.jpg" />
      </Container>
    </Grid>
  );
}
