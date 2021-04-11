import { Container, Text } from '@chakra-ui/react';
export default function Poll() {
  return (
    <Container maxWidth="full" margin="auto" textAlign="center" py="20">
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
          
            TAKE THE POLL
          
        </Text>
      <iframe
        scrolling="no"
        frameborder="0"
        className="frame"
        src="https://embed.pollforall.com/?pollId=l90v7yl"
      ></iframe>
    </Container>
  );
}
