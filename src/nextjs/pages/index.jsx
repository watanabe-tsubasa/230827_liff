import Head from "next/head";
import { IconContainer } from "../components/IconContainer";
import { Box } from "@chakra-ui/react";
import { LiffContext } from "../components/contexts/LiffContext";
import { useContext, useEffect } from "react";


export default function Home(props) {
  /** You can access to liff and liffError object through the props.
   *  const { liff, liffError } = props;
   *  console.log(liff.getVersion());
   *
   *  Learn more about LIFF API documentation (https://developers.line.biz/en/reference/liff)
   **/

  // const { liff, liffError } = useContext(LiffContext)
  
  return (
    <Box bg='blackAlpha.50'>
      <Head>
        <title>kikuzo_liff</title>
      </Head>
      <IconContainer />
    </Box>
  );
}
