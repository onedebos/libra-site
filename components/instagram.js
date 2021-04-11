import { Container, Text, Flex, Box, Grid, Image } from '@chakra-ui/react';
import { instagram } from '../utils/data';
import { URL } from '../utils/constants';
import Link from 'next/link';

export default function Instagram() {
  return (
    <Container className="relative bg-white" maxWidth="full" mt="0" py="1">
      <Container maxWidth="full">
        <Text
          w="full"
          // color="#FF0066"
          py="5"
          fontWeight="bold"
          fontSize={['2xl', '3xl']}
          textAlign="center"
          className="playfair text-purple-900"
          lineHeight="1"
          rounded="md"
        >
          <Link href={URL.IG}>
            <a>JOIN OVER 100,000 LIBRA FRIENDS ON INSTAGRAM</a>
          </Link>
        </Text>
      </Container>
      <Grid templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']} gap={6} maxWidth="6xl" margin="auto" pt="5">
        {instagram.map((pic, id) => {
          return (
            <Box
              borderRadius="md"
              overflow="hidden"
              w="100%"
              bg="white"
              textColor="gray.800"
              p="5"
              key={id * 3}
              fontSize="sm"
            >
              <Text>
                <Link href={URL.IG}>
                  <a className="text-blue-700 font-medium hover:text-libraOrange duration-200 transition-all border-b inline-block">
                    <Image src={pic} />
                  </a>
                </Link>
              </Text>
            </Box>
          );
        })}
      </Grid>
    </Container>
  );
}
