import { Box, FormLabel, Select } from '@chakra-ui/react';

export const TipSelect = ({ tipPercentage, updateTip = () => {} }) => {
  return (
    <Box alignSelf={'start'}>
      <FormLabel htmlFor="tip-amount">How much would you like to tip?</FormLabel>
      <Select
        my='2'
        id="tip-amount"
        value={tipPercentage}
        onChange={(event) => updateTip(event.target.value)}
      >
        <option value="15">15%</option>
        <option value="20">20%</option>
        <option value="25">25%</option>
      </Select>
    </Box>
  );
};

export default TipSelect;
