import Head from "next/head";
import packageJson from "../package.json";
import { IconContainer } from "../components/IconContainer";
import { Box } from "@chakra-ui/react";


export default function Home(props) {
  /** You can access to liff and liffError object through the props.
   *  const { liff, liffError } = props;
   *  console.log(liff.getVersion());
   *
   *  Learn more about LIFF API documentation (https://developers.line.biz/en/reference/liff)
   **/
  return (
    <Box bg='blackAlpha.50'>
      <Head>
        <title>kikuzo_liff</title>
      </Head>
      <IconContainer />
    </Box>
  );
}