import { Flex, Text, HStack, Container } from '@chakra-ui/react';
import Link from 'next/link';

export default function Menu() {
  return (
    <Flex alignItems="center" justifyContent="space-between" maxWidth="6xl" margin="auto" mb="5">
      <Link href="/">
        <a>
          <Text fontSize="xl">
            LIBRA
            <Text display="inline-block" fontWeight="bold">
              FRIENDS
            </Text>
          </Text>
        </a>
      </Link>

      <HStack fontWeight="normal" fontSize="sm" mt="" spacing="14px">
        <Link href="/">
          <a className="uppercase hover:text-libraOrange ease-in-out transition-all duration-200">Home</a>
        </Link>
        <Link href="/">
          <a className="uppercase hover:text-libraOrange ease-in-out transition-all duration-200">About us</a>
        </Link>
        <Link href="/">
          <a className="uppercase hover:text-libraOrange ease-in-out transition-all duration-200">Blog</a>
        </Link>
        <Link href="/">
          <a className="uppercase hover:text-libraOrange ease-in-out transition-all duration-200">Dear Libra Friends</a>
        </Link>
        <Link href="/">
          <a className="uppercase hover:text-libraOrange ease-in-out transition-all duration-200">Therapy corner</a>
        </Link>
        <Link href="/">
          <a className="uppercase hover:text-libraOrange ease-in-out transition-all duration-200">Shop</a>
        </Link>
      </HStack>
      <Text fontSize="sm" className="poppins" fontWeight="semibold">
        CONNECT. HAVE FUN. BE INSPIRED.
      </Text>
    </Flex>
  );
}
