import { Container, Flex, Text, Box, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { URL } from '../utils/constants';

export default function YouWillLoveThese() {
  return (
    <Container maxWidth="full" pt="0" pb="20" bgColor="white" className="circles-svg-bg">
      <Text textAlign="center" fontWeight="bold" className="playfair uppercase" fontSize="3xl">
        You will love these!
      </Text>
      <Text textAlign="center">OUR HANDBOOK AND JOURNAL</Text>
      <Box maxWidth="2xl" margin="auto">
        <Flex direction={['column', 'row']}>
          <Box p="6" backgroundColor="white" maxWidth="sm">
            <Link href={URL.LIBRA_FRIENDS_JOURNAL}>
              <a>
                <Image src="https://images-na.ssl-images-amazon.com/images/I/41hPAE9+2vL._SX384_BO1,204,203,200_.jpg" />
              </a>
            </Link>
            <Text
              color="white"
              fontSize="sm"
              width="40"
              maxWidth="sm"
              mt="10"
              backgroundColor="black"
              p="2"
              fontWeight="semibold"
            >
              JOURNAL
            </Text>

            <Text mt="2">
              This is a simple, yet powerful 2-part book which peels off the layers that cover the complex Libra, help
              you begin or advance your journey to self-discovery.
            </Text>

            <Text pt="5" fontWeight="semibold">
              <Link href={URL.LIBRA_FRIENDS_HANDBOOK}>
                <a className="text-blue-700 text-sm">Buy now</a>
              </Link>
            </Text>
          </Box>

          <Box p="6" backgroundColor="white" maxWidth="sm">
            <Link href={URL.LIBRA_FRIENDS_HANDBOOK}>
              <a>
                <Image
                  src="https://libra-landing.vercel.app/_next/image?url=%2Fassets%2Fimages%2Flibra-handbook-4.jpg&w=1920&q=75"
                  height="372"
                />
              </a>
            </Link>
            <Text
              fontSize="sm"
              color="white"
              width="40"
              maxWidth="sm"
              mt="10"
              backgroundColor="black"
              p="2"
              fontWeight="semibold"
            >
              HANDBOOK
            </Text>

            <Text mt="2">
              This is a simple, yet powerful 2-part book which peels off the layers that cover the complex Libra, help
              you begin or advance your journey to self-discovery.
            </Text>
            <Text pt="5" fontWeight="semibold">
              <Link href={URL.LIBRA_FRIENDS_HANDBOOK}>
                <a className="text-blue-700 text-sm">Buy now</a>
              </Link>
            </Text>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
}
