import { Box, Card, Stack, VStack } from '@chakra-ui/react';
import { MenuItemsContainer } from '../containers/MenuItemsContainer';
import { NewItemFormContainer } from '../containers/NewItemFormContainer';
import { SummaryContainer } from '../containers/SummaryContainer';
import { TipSelectContainer } from '../containers/TipSelectContainer';

const Calculator = () => {
  return (
    <VStack maxW='lg' marginX='auto' marginY='10' border={'2px'} borderColor='gray.200' rounded={'md'} p='2'>
      <NewItemFormContainer />
      <MenuItemsContainer />
      <TipSelectContainer />
      <SummaryContainer />
    </VStack>
  );
};

export default Calculator;
