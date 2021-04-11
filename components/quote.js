import { Container, Flex, Text } from '@chakra-ui/react';

export default function Quote({ quote, additionalClasses }) {
  return (
    <div className="w-full circles-svg-bg-orange">
      <div className="relative w-full">
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1440 320">
          <path
            fill="rgba(249, 146, 0,1)"
            fill-opacity="1"
            d="M0,96L48,80C96,64,192,32,288,32C384,32,480,64,576,69.3C672,75,768,53,864,48C960,43,1056,53,1152,90.7C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="relative w-full">
        <svg
          className="bottom-0 h-auto absolute w-full"
          id="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-300 0 950 270"
        >
          <path
            d="M-314,267 C105,364 400,100 812,279"
            fill="none"
            stroke="white"
            stroke-width="120"
            stroke-linecap="round"
          />
        </svg>

        <Flex
          className={additionalClasses}
          height="lg"
          className="bg-libraOrange"
          w="full"
          flexDirection="row"
          justifyContent="center"
          alignItems={['center', 'normal']}
          pb="20"
        >
          <Text fontWeight="semibold" maxWidth="lg" textAlign="center" fontSize={['2xl', '3xl']} textColor="white">
            {quote}

            <span className="block text-sm italic text-gray-200">- Libra Friends</span>
          </Text>
        </Flex>
      </div>
    </div>
  );
}
