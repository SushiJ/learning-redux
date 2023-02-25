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
    <Stack w='full' border={'2px'} borderColor='gray.200' p='2'>
      <Heading fontSize='xl' p='1'>
        {name}
      </Heading>
      <Flex >
        <Box p='1'>
          <FormLabel fontSize='lg' htmlFor={`$item-${uuid}-price`}>Price</FormLabel>
          <Input
            w='full'
            fontSize='md'
            border='2px'
            p='1'
            rounded={'md'}
            borderColor={'gray.200'}
            id={`$item-${uuid}-price`}
            value={price}
            type="number"
            onChange={(event) => updatePrice(event.target.value)}
          />
        </Box>
        <Box p='1'>
          <FormLabel fontSize='lg' htmlFor={`$item-${uuid}-quantity`}>quantity</FormLabel>
          <Input
            w='10'
            fontSize='md'
            border='2px'
            p='1'
            rounded={'md'}
            borderColor={'gray.200'}
            id={`$item-${uuid}-quantity`}
            value={quantity}
            type="number"
            onChange={(event) => updateQuantity(event.target.value)}
          />
        </Box>
        <Box textAlign="right" width="100%">
          <Heading fontSize={'lg'} py='1'>Total</Heading>
          {toCurrency(total)}
        </Box>
      </Flex>
      <Box width="100%" textAlign="right">
        <Button variant={'outline'} border='1px' borderColor={'red.400'} p='1' rounded='sm' color='red.400' size="small" onClick={remove}>
          Remove
        </Button>
      </Box>
    </Stack>
  );
};

export default MenuItem;
