import React from "react";
import { Box, Image, Text, VStack, useDisclosure, useToast } from "@chakra-ui/react";
import { AddModal } from "./AddModal";
import { timestamp } from "../utils/timestamp";
import { useCommonToast } from "./Hooks/CommonToast";

export const ClickIcon = (props) => {
  
  const { id, iconName, fileName} = props;
  const { isOpen, onOpen, onClose } = useDisclosure()
  const showToast = useCommonToast({
    title: "登録しました",
    description: `${iconName}: ${timestamp()}`,
  });
  const onClickIcon = () => {
    if (id === 'body_temp') { 
      onOpen(); 
    } else {
      showToast(); 
    }
  }

  return (
    <Box m='1rem'>
      <VStack>
        <Image
          borderRadius='full'
          boxSize='100'
          src={'/' + fileName}
          alt={id}
          shadow='lg'
          onClick={onClickIcon}
        />
        <Text
         as='b'
         color='blackAlpha.800'
         fontSize='xl'
        >
          {iconName}
        </Text>
        <AddModal isOpen={isOpen} onClose={onClose} />
      </VStack>
    </Box>
  )
}