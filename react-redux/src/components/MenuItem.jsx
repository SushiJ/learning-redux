import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  FormLabel,
  Stack
} from '@chakra-ui/react';

import { toCurrency } from '../utilities';

export const MenuItem = ({
  uuid,
  name,
  price,
  quantity,
  total,
  updatePrice = () => { },
  updateQuantity = () => { },
  remove = () => { }
}) => {
  return (
    <Stack w='full'>
      <Heading fontSize='xl' p='1'>
        {name}
      </Heading>
      <Flex>
        <Box p='1'>
          <FormLabel fontSize='lg' htmlFor={`$item-${uuid}-price`}>Price</FormLabel>
          <Input
            w='auto'
            border={'1px'}
            rounded='sm'
            id={`$item-${uuid}-price`}
            value={price}
            type="number"
            onChange={(event) => updatePrice(event.target.value)}
          />
        </Box>
        <Box p='1'>
          <FormLabel fontSize='lg' htmlFor={`$item-${uuid}-quantity`}>quantity</FormLabel>
          <Input
            border={'1px'}
    borderColor='pink.200'
            rounded='sm'
            id={`$item-${uuid}-quantity`}
            value={quantity}
            type="number"
            onChange={(event) => updateQuantity(event.target.value)}
          />
        </Box>
      </Flex>
      <Box textAlign="right" width="100%">
        <Heading variant="heading50">Total</Heading>
        {toCurrency(total)}
      </Box>
      <Box width="100%" textAlign="right">
        <Button variant={'solid'} bgColor='red.400' p='1' rounded='md' color='white' size="small" onClick={remove}>
          Remove
        </Button>
      </Box>
    </Stack>
  );
};

export default MenuItem;
