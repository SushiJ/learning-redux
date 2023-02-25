import { Box, Button, Input, FormLabel, FormControl, Stack } from '@chakra-ui/react';
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
    <Stack alignSelf='start' my='2' w='full'>
      <FormControl w='full' onSubmit={handleSubmit}>
        <Box>
          <FormLabel fontSize='lg' htmlFor="item-name">Item Name</FormLabel>
          <Input
            w='full'
            fontSize='md'
            border='2px'
            px='2'
            borderColor={'gray.200'}
            rounded='md'
            id="item-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Box>
        <Box my='2'>
          <FormLabel fontSize='lg' htmlFor="item-price">Price $</FormLabel>
          <Input
            w='full'
            fontSize='md'
            border='2px'
            px='2'
            borderColor={'gray.200'}
            id="item-price"
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </Box>
        <Button
          backgroundColor={!isValid() ? 'pink.100' : 'pink'}
          p='2'
          rounded='md'
          mb='2'
          w='full'
          isDisabled={!isValid()}
          cursor={!isValid() ? 'unset' : 'pointer'}
          onClick={handleSubmit}
          type="submit"
        >
          🍳 Add Item
        </Button>
      </FormControl>
    </Stack>
  );
};

export default NewItemForm;
