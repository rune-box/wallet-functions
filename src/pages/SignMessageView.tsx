import * as React from "react"
import {
  VStack,
  InputGroup,
  InputLeftAddon,
  Input,
  Text
} from "@chakra-ui/react"
// import { ENSContext } from "../client/ENSContext"
// import { DotbitContext } from "../client/DotbitContext"
import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"

export const SignMessageView = () => {
    return (
        <VStack spacing={4}>
          <NavBar />
          {/* <InputGroup>
            <InputLeftAddon children="DID" />
            <Input type="text" placeholder="try abc.eth or abc.bit"
              value={did} onChange={(e) => {
                setDID(e.target.value);
                processDid(e.target.value);
              }
              } />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="ETH" />
            <Input type="text" placeholder="Address: 0x..."
              value={evmAddress} onChange={(e) => { setEvmAddress(e.target.value); }} />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="Idena" />
            <Input type="text" placeholder="Address: 0x..."
              value={idenaAddress} onChange={(e) => { setIdenaAddress(e.target.value); }} />
          </InputGroup> */}
          <Text>Home</Text>
          <Footer />
        </VStack>
      );
}