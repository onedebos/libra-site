import { Flex, Text, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import { slide as MenuBar } from 'react-burger-menu';
import { useState } from 'react';

export default function Menu() {
  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px',
    },
    bmBurgerBars: {
      background: '#373a47',
    },
    bmBurgerBarsHover: {
      background: '#a90000',
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
    },
    bmCross: {
      background: '#ffffff',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
    },
    bmMenu: {
      background: '#d69e2e',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: '#373a47',
    },
    bmItemList: {
      color: '#000000',
      padding: '0.8em',
    },
    bmItem: {
      display: 'inline-block',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
    },
  };

  const [isOpen, setIsOpen] = useState(false);
  const [menuStatus, setMenuStatus] = useState('');

  const isMenuOpen = function (state) {
    setIsOpen(state.isOpen);
    setMenuStatus(state.isOpen);
  };

  const toggleMenu = () => {
    if (!menuStatus) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Menu bar that's shown when mobile menu is clicked to open */}
      <MenuBar isOpen={isOpen} styles={styles} customBurgerIcon={false} onStateChange={isMenuOpen}>
        <div className="outline-none text-white">
          <div className="flex flex-col uppercase text-sm font-semibold pt-10">
            <Link href="/">
              <a className="uppercase hover:text-libraOrange ease-in-out transition-all duration-200 mt-5">Home</a>
            </Link>
            <Link href="/">
              <a className="uppercase hover:text-libraOrange ease-in-out transition-all duration-200 mt-5">About us</a>
            </Link>
            <Link href="/">
              <a className="uppercase hover:text-libraOrange ease-in-out transition-all duration-200 mt-5">Blog</a>
            </Link>
            <Link href="/">
              <a className="uppercase hover:text-libraOrange ease-in-out transition-all duration-200 mt-5">
                Dear Libra Friends
              </a>
            </Link>
            <Link href="/">
              <a className="uppercase hover:text-libraOrange ease-in-out transition-all duration-200 mt-5">
                Therapy corner
              </a>
            </Link>
            <Link href="/">
              <a className="uppercase hover:text-libraOrange ease-in-out transition-all duration-200 mt-5">Shop</a>
            </Link>
          </div>

          <div className="mt-10 bottom-0">
            <Link href="/">
              <a className="ml-0">
                <Text fontSize="xl">
                  LIBRA
                  <Text display="inline-block" fontWeight="bold">
                    FRIENDS
                  </Text>
                </Text>
              </a>
            </Link>
          </div>

          <Text fontSize="sm" className="poppins" fontWeight="semibold" color="black" mt="10">
            CONNECT.
          </Text>

          <Text fontSize="sm" className="poppins" fontWeight="semibold" color="black">
            HAVE FUN.
          </Text>

          <Text fontSize="sm" className="poppins" fontWeight="semibold" color="black">
            BE INSPIRED.
          </Text>
        </div>
      </MenuBar>
      <Flex alignItems="center" justifyContent="space-between" maxWidth="6xl" margin="auto" mb="5">
        <Link href="/">
          <a className="ml-5 sm:ml-0">
            <Text fontSize="xl">
              LIBRA
              <Text display="inline-block" fontWeight="bold">
                FRIENDS
              </Text>
            </Text>
          </a>
        </Link>

        {/* Mobile menu button toggle */}
        <button onClick={() => toggleMenu()} className="mr-5 md:hidden">
          <span>
            <svg width="23" height="23" viewBox="0 0 23 23">
              <path
                fill="transparent"
                strokeWidth="3"
                stroke="hsl(0, 0%, 18%)"
                strokeLinecap="round"
                d="M 2 2.5 L 20 2.5"
              ></path>
              <path
                fill="transparent"
                strokeWidth="3"
                stroke="hsl(0, 0%, 18%)"
                strokeLinecap="round"
                d="M 2 9.423 L 20 9.423"
                opacity="1"
              ></path>
              <path
                fill="transparent"
                strokeWidth="3"
                stroke="hsl(0, 0%, 18%)"
                strokeLinecap="round"
                d="M 2 16.346 L 20 16.346"
              ></path>
            </svg>
          </span>
        </button>

        <HStack fontWeight="normal" fontSize="sm" mt="" spacing="14px" display={['none', 'block']}>
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
            <a className="uppercase hover:text-libraOrange ease-in-out transition-all duration-200">
              Dear Libra Friends
            </a>
          </Link>
          <Link href="/">
            <a className="uppercase hover:text-libraOrange ease-in-out transition-all duration-200">Therapy corner</a>
          </Link>
          <Link href="/">
            <a className="uppercase hover:text-libraOrange ease-in-out transition-all duration-200">Shop</a>
          </Link>
        </HStack>

        <Text fontSize="sm" className="poppins" fontWeight="semibold" display={['none', 'block']}>
          CONNECT. HAVE FUN. BE INSPIRED.
        </Text>
      </Flex>
    </>
  );
}
