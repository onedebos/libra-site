import { Container, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function BlogSideBar({ title, url, category }) {
  return (
    <Container mb="8" pb="5" borderBottom="1px solid gray">
    <Text fontSize="sm" color="yellow.900" className="uppercase">{category}</Text>
      <Link href={url}>
        <a>
          <Text fontWeight="semibold" fontSize="2xl">{title}</Text>
        </a>
      </Link>
      
    </Container>
  );
}
