import { Box, Flex } from "@chakra-ui/react";
import { ClickIcon } from "./ClickIcon";
import { iconData } from "../utils/icons";

export const IconContainer = () => {
  return(
    <Box>
      <Flex
       flexWrap='wrap'
       align='center'
       justify='center'
       h='100vh'
       >
        {iconData.map(elem => <ClickIcon key={elem.id} id={elem.id} iconName={elem.iconName} fileName={elem.fileName} />)}
      </Flex>
    </Box>
  );
}