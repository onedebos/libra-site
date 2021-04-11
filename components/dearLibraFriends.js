import { Container, Text, Flex, Box, Grid, Image } from '@chakra-ui/react';
import { dearLibraFriends } from '../utils/data';
import { URL } from '../utils/constants';
import Link from 'next/link';

export default function DearLibraFriends() {
  return (
    <>
      <div className="relative w-full dropping-svg-bg">
        <div className="w-full text-center">
        <Text
            className="playfair block md:hidden"
            fontWeight="semi-bold"
            fontSize="2xl"
            margin="auto"
            mt="5"
            mb="5"
            mx="5"
            color="gray.600"
            maxWidth="md"
            textAlign="center"
          >
            Libras are the shock-absorbers of the Zodiac.The more shocking or alarming the news, the calmer the Libra
            will be.
          </Text>

          <span className="block text-md italic text-gray-600">- Libra Friends</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="rgba(17, 24, 39, 1)"
            fill-opacity="1"
            d="M0,0L48,10.7C96,21,192,43,288,85.3C384,128,480,192,576,234.7C672,277,768,299,864,282.7C960,267,1056,213,1152,186.7C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Container maxWidth="full" mt="0" py="20" className="bg-gray-900 text-white">
        <Container maxWidth="full">
          <Text textAlign="center">DAILY LIBRA STRUGGLES</Text>
          <Text fontWeight="bold" fontSize="3xl" textAlign="center" className="playfair" lineHeight="1" pt="1">
            DEAR LIBRA FRIENDS
          </Text>
        </Container>

        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']} gap={6} maxWidth="6xl" margin="auto" pt="5">
          {dearLibraFriends.map((story, id) => {
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
                  {story.story}{' '}
                  <Link href={story.url}>
                    <a className="text-blue-700 font-medium hover:text-libraOrange duration-200 transition-all border-b inline-block">
                      Continue reading
                    </a>
                  </Link>
                </Text>

                <Flex alignItems="center" mt="3">
                  <Image borderRadius="full" boxSize="50px" src={story.imgUrl} alt="Segun Adebayo" />
                  <Text fontStyle="italic" fontSize="sm" mt="3" ml="3" color="gray.700">
                    {' '}
                    {story.author} from Melbourne
                  </Text>
                </Flex>
              </Box>
            );
          })}
        </Grid>

        <Text textAlign="center" mt="8" fontSize="xl" fontWeight="semibold">
          <Link href={URL.MORE_DLF_STORIES}>
            <a className="text-center text-libraOrange hover:text-white duration-200 transition-all">
              Read more stories
            </a>
          </Link>
        </Text>
      </Container>

      <div className="relative bg-white w-full circles-svg-bg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="rgba(17, 24, 39, 1)"
            fill-opacity="1"
            d="M0,224L120,197.3C240,171,480,117,720,112C960,107,1200,149,1320,170.7L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
}
