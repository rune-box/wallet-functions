import * as React from "react"
import {
    Card, CardHeader, CardBody, CardFooter,
    VStack,
    InputGroup,
    InputLeftAddon,
    Input,
    Text,
    Wrap,
    WrapItem,
    Heading,
    Stack,
    StackDivider,
    Box,
    HStack,
    Button,
    Center,
    useToast,
    LinkBox,
    LinkOverlay
} from "@chakra-ui/react"
import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import { AlgoIcon, ArIcon, AtomIcon, BtcIcon, CkbIcon, DotIcon, EthIcon, SolIcon, MasksIcon, UnipassIcon, StacksIcon, TrxIcon } from '../icons/Icons';
import { Wallet } from "../chains/Wallet"
import { MyAlgoWallet } from "../chains/MyAlgoWallet"
import { ArWallet } from "../chains/ArWallet"
import { KeplrWallet } from "../chains/KeplrWallet"
import { EthWallet } from "../chains/EthWallet"
import { DotWallet } from "../chains/DotWallet"
import { PortalWallet } from "../chains/PortalWallet"
import { SolWallet } from "../chains/SolWallet"
import { StacksWallet } from "../chains/StacksWallet"
import { TrxWallet } from "../chains/TrxWallet"
//
import { UniPassWallet } from "../chains/UniPassWallet"
import { ViewData } from "../client/ViewData";
import { useNavigate } from "react-router-dom";
import { RoutesData } from "../client/RoutesData";
import { FinishedAuthData } from "@stacks/connect";

export const HomeView = () => {
    const navigate = useNavigate();
    const toast = ViewData.toast = useToast();

    const doConnect = async (wallet: Wallet) => {
        ViewData.account = await wallet.connect();
        if (ViewData.account) {
            ViewData.connected = true;
            ViewData.wallet = wallet;
            navigate(RoutesData.SignMessage);
        }
    }

    const connectMyAlgo = async () => {
        const w = new MyAlgoWallet();
        await doConnect(w);
    }

    const connectAr = async () => {
        const w = new ArWallet();
        await doConnect(w);
    }
    const connectKeplr = async () => {
        const w = new KeplrWallet();
        await doConnect(w);
    }
    const connectEth = async () => {
        const w = new EthWallet();
        await doConnect(w);
    }
    const connectDot = async () => {
        const w = new DotWallet();
        await doConnect(w);
    }
    const connectPW = async () => {
        const w = new PortalWallet();
        await w.init();
        await doConnect(w);
    }
    const connectSolana = async () => {
        const w = new SolWallet();
        await doConnect(w);
    }
    const connectStacks = async () => {
        const w = new StacksWallet();
        w.connect2(
            (payload: FinishedAuthData) => {
                ViewData.account = w.account;
                if (ViewData.account) {
                    ViewData.connected = true;
                    ViewData.wallet = w;
                    navigate(RoutesData.SignMessage);
                }
            },
            () => { });
    }
    const connectTron = async () => {
        const w = new TrxWallet();
        await doConnect(w);
    }
    // =========== Smart Contract Wallet ===========
    const connectUniPassWallet = async () => {
        const w = new UniPassWallet();
        await doConnect(w);
    }

    return (
        <VStack spacing={4}>
            <NavBar />
            <Wrap spacing='30px' justify='center'>
                <WrapItem>
                    <Card width="260px" height="310px">
                        <CardHeader>
                            <Heading size='md'>Algorand</Heading>
                        </CardHeader>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing="4">
                                <Center>
                                    <Heading size="3xl"><AlgoIcon /></Heading>
                                </Center>
                                <Box>
                                    <HStack>
                                        <Button onClick={connectMyAlgo}>MyAlgo</Button>
                                    </HStack>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>
                </WrapItem>
                <WrapItem>
                    <Card width="260px" height="310px">
                        <CardHeader>
                            <Heading size='md'>Arweave</Heading>
                        </CardHeader>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing="4">
                                <Center>
                                    <Heading size="3xl"><ArIcon /></Heading>
                                </Center>
                                <Box>
                                    <HStack>
                                        <Button onClick={connectAr}>Injected</Button>
                                    </HStack>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>
                </WrapItem>
                <WrapItem>
                    <Card width="260px" height="310px">
                        <CardHeader>
                            <Heading size='md'>Cosmos</Heading>
                        </CardHeader>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing="4">
                                <Center>
                                    <Heading size="3xl"><AtomIcon /></Heading>
                                </Center>
                                <Box>
                                    <HStack>
                                        <Button onClick={connectKeplr}>Keplr</Button>
                                    </HStack>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>
                </WrapItem>
                <WrapItem>
                    <Card width="260px" height="310">
                        <CardHeader>
                            <Heading size='md'>Ethereum</Heading>
                        </CardHeader>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing="4">
                                <Center>
                                    <Heading size="3xl"><EthIcon /></Heading>
                                </Center>
                                <Box>
                                    <HStack>
                                        <Button onClick={connectEth}>Injected</Button>
                                    </HStack>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>
                </WrapItem>
                <WrapItem>
                    <Card width="260px" height="310px">
                        <CardHeader>
                            <Heading size='md'>Nervos</Heading>
                        </CardHeader>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing="4">
                                <Center>
                                    <Heading size="3xl"><CkbIcon /></Heading>
                                </Center>
                                <Box>
                                    <HStack>
                                        <Button onClick={connectPW}>PW (Incompatible with CKB)</Button>
                                    </HStack>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>
                </WrapItem>
                <WrapItem>
                    <Card width="260px" height="310px">
                        <CardHeader>
                            <Heading size='md'>Polkadot</Heading>
                        </CardHeader>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing="4">
                                <Center>
                                    <Heading size="3xl"><DotIcon /></Heading>
                                </Center>
                                <Box>
                                    <HStack>
                                        <Button onClick={connectDot}>Web3</Button>
                                    </HStack>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>
                </WrapItem>
                <WrapItem>
                    <Card width="260px" height="310px">
                        <CardHeader>
                            <Heading size='md'>Solana</Heading>
                        </CardHeader>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing="4">
                                <Center>
                                    <Heading size="3xl"><SolIcon /></Heading>
                                </Center>
                                <Box>
                                    <HStack>
                                        <Button onClick={connectSolana}>Injected</Button>
                                    </HStack>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>
                </WrapItem>
                <WrapItem>
                    <Card width="260px" height="310px">
                        <CardHeader>
                            <Heading size='md'>Stacks</Heading>
                        </CardHeader>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing="4">
                                <Center>
                                    <Heading size="3xl"><StacksIcon /></Heading>
                                </Center>
                                <Box>
                                    <HStack>
                                        <Button onClick={connectStacks}>Injected</Button>
                                    </HStack>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>
                </WrapItem>
                <WrapItem>
                    <Card width="260px" height="310px">
                        <CardHeader>
                            <Heading size='md'>Tron</Heading>
                        </CardHeader>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing="4">
                                <Center>
                                    <Heading size="3xl"><TrxIcon /></Heading>
                                </Center>
                                <Box>
                                    <HStack>
                                        <Button onClick={connectTron}>Injected</Button>
                                    </HStack>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>
                </WrapItem>
            </Wrap>
            <Center margin="50px;">
                <Heading size="xl">Smart Contract Wallets</Heading>
            </Center>
            <Wrap spacing='30px' justify='center'>
                <WrapItem>
                    <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'
                        width="200px" height="200px" cursor="pointer">
                        <Heading size="md" my="2">
                            <LinkOverlay onClick={connectUniPassWallet}>UniPass Wallet</LinkOverlay>
                        </Heading>
                        <Center marginTop="40px">
                            <Heading size="3xl"><UnipassIcon /></Heading>
                        </Center>
                    </LinkBox>
                </WrapItem>
            </Wrap>
            <Footer />
        </VStack>
    );
}