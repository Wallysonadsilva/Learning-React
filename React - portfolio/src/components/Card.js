import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box backgroundColor="white" rounded="md">
      <VStack spacing={5} alignItems="flex-start">
        <Image src={imageSrc} rounded="md"/>
      {/* <div>   */}
      <Heading size="s" color="black">{title}</Heading>
        <Text fontsize="xs" color="black">{description}</Text>
        <Text fontsize="xs" color="black">
          See more 
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Text>
        {/* </div> */}
      </VStack>
    </Box>
  );
};

export default Card;
