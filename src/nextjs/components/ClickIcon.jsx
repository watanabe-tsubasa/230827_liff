import React from "react";
import { Box, Button, Image, Text, VStack, useDisclosure } from "@chakra-ui/react";
import { AddModal } from "./AddModal";
import { timestamp } from "../utils/timestamp";

export const ClickIcon = (props) => {
  
  const { id, iconName, fileName} = props;
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onClickIcon = () => {
    if (id === 'body_temp') { 
      onOpen(); 
    } else {
      alert(timestamp());
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