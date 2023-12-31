import "../styles/globals.css";
import { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import liff from "@line/liff";
import { LiffContext } from "../components/contexts/LiffContext";
import { config } from "dotenv";
config();

function MyApp({ Component, pageProps }) {
  const [liffObject, setLiffObject] = useState(null);
  const [lineId, setLineId] = useState(null);
  const [liffError, setLiffError] = useState(null);

  // Execute liff.init() when the app is initialized
  useEffect(() => {
    console.log("start liff.init()...");
    liff.init({ 
      liffId: process.env.LIFF_ID,
      // withLoginOnExternalBrowser:true
    })
    .then(() => {
      console.log(`liff.init() done, ${liff.getContext()}`);
      const context  = liff.getContext();
      const userId = context.userId || 'testId'
      setLineId(userId);
      setLiffObject(liff);
    })
    .catch((error) => {
      console.log(`liff.init() failed: ${error}`);
      if (!process.env.LIFF_ID) {
        console.info(
          "LIFF Starter: Please make sure that you provided `LIFF_ID` as an environmental variable."
        );
      }
      setLiffError(error.toString());
    });
  }, []);

  return (
    <ChakraProvider>
      <LiffContext.Provider value={{liff: liffObject, lineId: lineId, liffError: liffError}}>
        <Component {...pageProps}/>
      </LiffContext.Provider>
    </ChakraProvider>
  )
}

export default MyApp;
