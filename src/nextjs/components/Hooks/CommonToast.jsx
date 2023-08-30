import { useToast } from "@chakra-ui/react";

export const useCommonToast = () => {
  const toast = useToast();

  const showToast = ({
    title = "Default Title",
    description = "Default Description",
    status = "success",
    duration = 4000,
    isClosable = true,
    position = "top",
  } = {}) => {
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
