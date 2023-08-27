import { useToast } from "@chakra-ui/react";

export const useCommonToast = ({
  title = "Default Title",
  description = "Default Description",
  status = "success",
  duration = 9000,
  isClosable = true,
  position = "top",
} = {}) => {
  const toast = useToast();

  const showToast = () => {
    toast({
      title,
      description,
      status,
      duration,
      isClosable,
      position,
    });
  };

  return showToast;
};
