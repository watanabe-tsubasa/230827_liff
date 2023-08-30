import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import React, { useState } from "react"
import { timestamp } from "../utils/timestamp"
import { TempSlider } from "./atoms/TempSlider"
import { useCommonToast } from "./Hooks/CommonToast"
import { postLineRecord } from "../utils/postLineRecord"

export const AddModal = (props) => {
  const { isOpen, onClose } = props

  const [sliderVal, setSliderValue] = useState(36.2);
  const showToast = useCommonToast();
  const onClickResiter = async () => {
    try {
      await postLineRecord('testId', '体温', `${sliderVal}`)
      showToast({
        title: `登録：${timestamp()}`,
        description: `体温 ${sliderVal}度`,
      });
    } catch {
      showToast({
        title: "登録に失敗しました",
        status: "error",
        description: 'ネットワーク状況を確認してください'
      }); 
    }
    onClose();
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color='blackAlpha.800'>体温を入力してください</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>体温</FormLabel>
              <TempSlider onValueChange={setSliderValue} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClickResiter}>
              登録
            </Button>
            <Button onClick={onClose}>中止</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}