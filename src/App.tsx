import {
  ChakraProvider,
  Box,
  extendTheme,
} from "@chakra-ui/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';
import { RoutesData } from "./client/RoutesData";
import {HomeView} from "./pages/HomeView"
import {SignMessageView} from "./pages/SignMessageView"
import {VerifyMessageView} from "./pages/VerifyMessageView"

const theme = extendTheme({
  components: {
    Steps,
  },
});

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box padding={2} maxW="1280px" mx="auto">
        <BrowserRouter>
            <Routes>
              <Route path={RoutesData.SignMessage} element={<SignMessageView />} />
              <Route path={RoutesData.VerifyMessage} element={<VerifyMessageView />} />
              <Route path="*" element={<HomeView />} />
            </Routes>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}
