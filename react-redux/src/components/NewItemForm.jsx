import { Box, Button, Input, FormLabel, VStack, FormControl } from '@chakra-ui/react';
import { useState } from 'react';

export const NewItemForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const isValid = () => {
    if (!name) return false;
    if (!price.length) return false;
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (typeof onSubmit === 'function') {
      onSubmit(name, price);
    }

    setName('');
    setPrice(0);
  };

  return (
    <VStack alignSelf='start' my='2'>
      <FormControl onSubmit={handleSubmit}>
        <Box>
          <FormLabel fontSize='lg' htmlFor="item-name">Item Name</FormLabel>
          <Input
            fontSize='md'
            border='2px'
            rounded='md'
            id="item-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Box>
        <Box my='2'>
          <FormLabel fontSize='lg' htmlFor="item-price">Price</FormLabel>
          <Input
            fontSize='md'
            border='2px'
            rounded='md'
            id="item-price"
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </Box>
        <Button
          bgColor='pink'
          p='2'
          rounded='md'
          mb='2'
          disabled={!isValid()}
          onClick={handleSubmit}
          type="submit"
          variant="primary"
        >
          🍳 Add Item
        </Button>
      </FormControl>
    </VStack>
  );
};

export default NewItemForm;
