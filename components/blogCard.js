import { Container, Image, Text, Box } from '@chakra-ui/react';
import Link from 'next/link';
import { getExcerpt } from '../utils/helpers';

export default function BlogCard({ imgUrl, url, title, content }) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <div width="64">
        <Link href={url}>
          <a>
            <Image alt={title} src={imgUrl} width="full" height={200} />
          </a>
        </Link>
      </div>
      <Box p="6" backgroundColor="white">
        <Text padding="5 0" fontSize="xl" fontWeight="semibold" pt="3" className="playfair">
          {title}
        </Text>
        <Text fontSize="sm" pb="1">
          {getExcerpt(content)}
        </Text>
        <Link href={url}>
          <a className="text-blue-600 text-sm border-b-2 border-libraOrange">Read more</a>
        </Link>
      </Box>
    </Box>
  );
}
