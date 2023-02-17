import * as React from "react"
import {
  VStack,
  InputGroup,
  InputLeftAddon,
  Input,
  Text,
  Grid,
  GridItem,
  Button,
  useToast,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Textarea,
  Center
} from "@chakra-ui/react"
// import { ENSContext } from "../client/ENSContext"
// import { DotbitContext } from "../client/DotbitContext"
import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import { ViewData } from "../client/ViewData"
import { ProviderKeys } from "../chains/ProviderKeys"
import { SignatureData } from "@stacks/connect"

export const SignMessageView = () => {
  const [msg, setMsg] = React.useState("");
  const [originalSig, setOriginalSig] = React.useState("");
  const [sig, setSig] = React.useState("");
  const toast = useToast();

  const signMessage = async () => {
    if (!msg) {
      toast({
        title: 'No data',
        description: "Please input something in Message area.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    let w = ViewData.wallet;
    if (!w || !ViewData.account) {
      toast({
        title: 'Not connected',
        description: "Please connect your wallet in Home page.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    
    if (ViewData.wallet.token === ProviderKeys.Stacks) {
      w.signMessage2(msg,
        (data: SignatureData) => {
          setOriginalSig(data.signature);
          setSig(w.buildSignature(msg, data.signature));
        },
        () => { }
      );
    }
    else {
      const s = await w.signMessage(msg);
      setOriginalSig(s);
      if (ViewData.wallet.token === ProviderKeys.Solana) {
        const sigObj = JSON.parse(s);
        setSig(w.buildSignature2(msg, sigObj.signature));
      }
      else
        setSig(w.buildSignature(msg, s));
    }

  }

  return (
    <VStack spacing={4}>
      <NavBar />
      <Center w="100%">
        <VStack spacing={5} m={5} w="100%">
          <Card w="100%" height="300px">
            <CardHeader>
              <Heading size='md'>Message</Heading>
            </CardHeader>
            <CardBody>
              <Textarea height="200px"
                value={msg}
                onChange={(e) => setMsg(e.target.value)} />
            </CardBody>
          </Card>
          <Button onClick={signMessage}>Sign Message</Button>
          <Grid templateColumns='repeat(2, 1fr)' gap={6} w="100%">
            <GridItem w="100%">
              <Card w="100%" height="400px">
                <CardHeader>
                  <Heading size='md'>Original Signature</Heading>
                </CardHeader>
                <CardBody>
                  <Textarea height="300px" value={originalSig} isReadOnly={true} />
                </CardBody>
              </Card>
            </GridItem>
            <GridItem w="100%">
              <Card w="100%" height="400px">
                <CardHeader>
                  <Heading size='md'>Formatted Signature</Heading>
                </CardHeader>
                <CardBody>
                  <Textarea height="300px" value={sig} isReadOnly={true} />
                </CardBody>
              </Card>
            </GridItem>
          </Grid>
        </VStack>
      </Center>
      <Footer />
    </VStack>
  );
}