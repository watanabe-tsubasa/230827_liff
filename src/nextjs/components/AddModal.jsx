import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import React, { useState } from "react"
import { timestamp } from "../utils/timestamp"
import { TempSlider } from "./atoms/TempSlider"
import { useCommonToast } from "./Hooks/CommonToast"

export const AddModal = (props) => {
  const { isOpen, onClose } = props

  const [sliderVal, setSliderValue] = useState(36.2);
  const showToast = useCommonToast({
    title: "登録しました",
    description: `体温: ${timestamp()}, ${sliderVal}度`,
  });
  const onClickResiter = () => {
    showToast();
    onClose()
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