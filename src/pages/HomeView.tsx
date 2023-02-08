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
    useToast
} from "@chakra-ui/react"
import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import { AlgoIcon, ArIcon, AtomIcon, BtcIcon, CkbIcon, DotIcon, EthIcon, SolIcon, MasksIcon, UnipassIcon } from '../icons/Icons';
import { Wallet } from "../chains/Wallet"
import { MyAlgoWallet } from "../chains/MyAlgoWallet"
import { ArWallet } from "../chains/ArWallet"
import { EthWallet } from "../chains/EthWallet"
import { SolWallet } from "../chains/SolWallet"
import { PortalWallet } from "../chains/PortalWallet"
import { ViewData } from "../client/ViewData";
import { useNavigate } from "react-router-dom";
import { RoutesData } from "../client/RoutesData";

export const HomeView = () => {
    const navigate = useNavigate();
    const toast = ViewData.toast = useToast();

    const doConnect = async (wallet: Wallet) => {
        ViewData.account = await wallet.connect();
        if(ViewData.account){
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

    const connectEth = async () => {
        const w = new EthWallet();
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
                                        <Button isDisabled={true} onClick={connectPW}>Portal (PW)</Button>
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
            </Wrap>
            <Footer />
        </VStack>
    );
}