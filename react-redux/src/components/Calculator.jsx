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
    <VStack maxW='md' marginX='auto' marginY='10' >
      <NewItemForm style={{ background: "green" }} />
      <MenuItems items={items} />
      <TipSelectContainer />
      <Summary />
    </VStack>
  );
};

export default Calculator;
