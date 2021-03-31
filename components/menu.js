import { Flex, Spacer, Center, Square, Box, Text, HStack } from "@chakra-ui/react";
import Link from 'next/link'

export default function Menu() {
  return (
    <HStack fontSize="large" fontWeight="bold" mt="10" spacing="24px">
        <Link href="/"><a className="uppercase hover:text-pink-500 ease-in-out transition-all duration-200">Home</a></Link>
        <Link href="/"><a className="uppercase hover:text-pink-500 ease-in-out transition-all duration-200">About us</a></Link>
        <Link href="/"><a className="uppercase hover:text-pink-500 ease-in-out transition-all duration-200">Blog</a></Link>
        <Link href="/"><a className="uppercase hover:text-pink-500 ease-in-out transition-all duration-200">Dear Libra Friends</a></Link>
        <Link href="/"><a className="uppercase hover:text-pink-500 ease-in-out transition-all duration-200">Therapy corner</a></Link>
        <Link href="/"><a className="uppercase hover:text-pink-500 ease-in-out transition-all duration-200">Shop</a></Link>
    </HStack>
  );
}
