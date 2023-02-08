import React from 'react';
import { Link as ReactLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Flex,
  Link,
  Container,
  useDisclosure,
  Stack,
  HStack,
  Text,
  IconButton,
  useToast,
  Button,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  MenuGroup,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Logo } from '../icons/Logo';
import { RoutesData } from '../client/RoutesData';
import { ViewData } from '../client/ViewData';

export const NavBar = () => {
  const { isOpen: isHamburgerOpen, onOpen: onHamburgerOpen, onClose: onHamburgerClose } = useDisclosure();
  // const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();
  // const btnRefDrawer = React.useRef(null);

  // React.useEffect(() => {
  //   if(ViewData.eth && !cxtCeramic.selfid && connection.status === "idle"){
  //     doConnect(ViewData.eth);
  //   }
  // });

  return (
    <>
    <Box w="100%" bg="gray.50" px={4}>
      <Container as={Stack} maxW={'6xl'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isHamburgerOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isHamburgerOpen ? onHamburgerClose : onHamburgerOpen}
          />
          <HStack spacing={8}>
            <Logo boxSize={16} title="DNA" />
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              <Link as={ReactLink} to={RoutesData.Home}>Home</Link>
              {ViewData.connected ? <Link as={ReactLink} to={RoutesData.SignMessage}>Sign Message</Link> : null}
              {/* {ViewData.connected ? <Link as={ReactLink} to={RoutesData.VerifyMessage}>Verify Message</Link> : null} */}
            </HStack>
          </HStack>

          <Flex alignItems={'center'}>
            <HStack direction={'row'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {/* <ColorModeSwitcher /> */}
            </HStack>
          </Flex>
        </Flex>
      </Container>
      {isHamburgerOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            <Link as={ReactLink} to={RoutesData.Home}>Home</Link>
            {ViewData.connected ? <Link as={ReactLink} to={RoutesData.SignMessage}>Sign Message</Link> : null}
              {/* {ViewData.connected ? <Link as={ReactLink} to={RoutesData.VerifyMessage}>Verify Message</Link> : null} */}
          </Stack>
        </Box>
      ) : null}
    </Box>
    {/* <Drawer size="lg"
        isOpen={isDrawerOpen}
        placement='right'
        onClose={onDrawerClose}
        finalFocusRef={btnRefDrawer}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Connect with signature</DrawerHeader>
          <DrawerBody>
            <SignatureForm defaultAddress="" defaultMessage="" buildMessage={WalletUtility.buildSignContent} onVerify={verifySig}/>
          </DrawerBody>
          <DrawerFooter>
            <IconButton icon={<CloseIcon />} aria-label={"Cancel"} m={2} isRound={true} variant='outline'
                    onClick={onDrawerClose}/>
          </DrawerFooter>
        </DrawerContent>
      </Drawer> */}
    </>
  );
}
