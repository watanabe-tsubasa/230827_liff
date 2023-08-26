import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import React, { useRef } from "react"
import { timestamp } from "../utils/timestamp"

export const AddModal = (props) => {
  const { isOpen, onClose } = props
  const initialRef = useRef(null)
  const onClickResiter = () => {
    alert(`${timestamp()}, ${initialRef.current.value}`)
    onClose()
  }

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
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
              <Input ref={initialRef} placeholder='体温' />
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