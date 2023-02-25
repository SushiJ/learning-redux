import { Box, Flex, Heading } from '@chakra-ui/react';

export const SummaryLine = ({ title, children }) => {
  return (
    <Flex>
      <Box width="100%" textAlign="right">
        <Heading fontSize={'lg'} fontWeight='bold' >{title}</Heading>
      </Box>
      <Box width="100%" textAlign="right">
        {children}
      </Box>
    </Flex>
  );
};

export default SummaryLine;
