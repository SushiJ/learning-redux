import { Box, Card, Stack, VStack } from '@chakra-ui/react';
import { TipSelectContainer } from '../containers/TipSelectContainer';

import { MenuItems } from './MenuItems';
import { NewItemForm } from './NewItemForm';
import { Summary } from './Summary';

const items = [
  { uuid: 1, name: 'Tofu Roast', price: 14, quantity: 1 },
  { uuid: 2, name: 'Vegan Ham', price: 12, quantity: 1 }
];

const Calculator = () => {
  return (
    <VStack maxW='lg' marginX='auto' marginY='10' border={'2px'} borderColor='gray.200' rounded={'md'} p='2'>
      <NewItemForm />
      <MenuItems items={items} />
      <TipSelectContainer />
      <Summary />
    </VStack>
  );
};

export default Calculator;
