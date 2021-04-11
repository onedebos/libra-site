import { Container, Text, Flex, Grid } from '@chakra-ui/react';
import BlogCard from './blogCard';

import { blog } from '../utils/data';
import BlogSideBar from './blogSideBar';

export default function TheBalancedLibra() {
  const slicedBlog = blog.slice(0, 4);
  return (
    <>
      <Container mt="5" py="10" maxWidth="full" className="bg-libraPurple2 relative">
        <Container maxWidth="full">
          <Text textAlign="center" maxWidth="4xl">
            THE MOST VALUABLE LIBRA INSIGHTS{' '}
          </Text>
          <Text
            textAlign="center"
            fontWeight="bold"
            fontSize="3xl"
            className="playfair"
            maxWidth="4xl"
            mx={['10', '0']}
          >
            THE BALANCED LIBRA BLOG
          </Text>

          {/* blog content */}
          <Flex flexDirection={['column', 'row']} maxWidth="6xl" alignItems="center" margin="auto">
            <Grid templateColumns={['repeat(1, 2fr)', 'repeat(2, 1fr)']} gap={5} margin="auto" maxWidth="6xl">
              {blog.map((b, id) => (
                <div key={id}>
                  <BlogCard
                    title={b.title}
                    url={b.url}
                    content="At BossBabe, we hear from tons of ambitious women who want to know how to make more money, grow their Instagram presence and live a life they’re absolutely in love with. Lately, we’ve been hearing from our community, and a lot of women wanted to know more about how to find their niche. So this […]

"
                    imgUrl={b.imgUrl}
                  />
                </div>
              ))}
            </Grid>
            <Container maxWidth="sm" backgroundColor="pink.50" py="10">
              <Text className="playfair" ml="2" mt="1" mb="5" fontWeight="bold" color="yellow.800" fontSize="5xl">
                TRENDING
              </Text>
              {slicedBlog.map((b, id) => (
                <div key={id * 2}>
                  <BlogSideBar category={b.category} url={b.url} title={b.title} />
                </div>
              ))}
            </Container>
          </Flex>
        </Container>
      </Container>

      <div className="relative w-full dropping-svg-bg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="rgba(17, 24, 39, 1)"
            fill-opacity="1"
            d="M0,224L120,197.3C240,171,480,117,720,112C960,107,1200,149,1320,170.7L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
        <div className="absolute text-center w-full bottom-0">
          <Text
            className="playfair hidden md:block"
            fontWeight="semi-bold"
            fontSize={["sm", "2xl"]}
            margin="auto"
            mt="5"
            mb="5"
            color="gray.600"
            maxWidth="md"
            textAlign="center"
          >
            Libras are the shock-absorbers of the Zodiac.The more shocking or alarming the news, the calmer the Libra
            will be.
          </Text>

          
        </div>
      </div>
    </>
  );
}
