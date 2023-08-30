import React from "react";
import { Box, Image, Text, VStack, useDisclosure } from "@chakra-ui/react";
import { AddModal } from "./AddModal";
import { timestamp } from "../utils/timestamp";
import { useCommonToast } from "./Hooks/CommonToast";
import { postLineRecord } from "../utils/postLineRecord";


export const ClickIcon = (props) => {
  
  const { id, iconName, fileName} = props;
  const { isOpen, onOpen, onClose } = useDisclosure()
  const showToast = useCommonToast();
  const onClickIcon = async () => {
    if (id === 'body_temp') { 
      onOpen(); 
    } else {
      try {
        await postLineRecord('testId', iconName)
        showToast({
          title: `登録：${timestamp()}`,
          description: `${iconName}`,
        });
      } catch {
        showToast({
          title: "登録に失敗しました",
          status: "error",
          description: 'ネットワーク状況を確認してください'
        }); 
      }
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