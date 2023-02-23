import { Box, Button, Input, FormLabel } from '@chakra-ui/react';
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
    <Box >
      <form onSubmit={handleSubmit}>
        <Box >
          <FormLabel htmlFor="item-name">Item Name</FormLabel>
          <Input
            id="item-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Box>
        <Box >
          <FormLabel htmlFor="item-price">Price</FormLabel>
          <Input
            id="item-price"
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </Box>
        <Button
          disabled={!isValid()}
          onClick={handleSubmit}
          type="submit"
          variant="primary"
        >
          🍳 Add Item
        </Button>
      </form>
    </Box>
  );
};

export default NewItemForm;
