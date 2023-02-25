import { FormLabel, Select, Stack, VStack } from '@chakra-ui/react';

export const TipSelect = ({ tipPercentage, updateTip = () => { } }) => {
  return (
    <Stack alignSelf={'start'} w='full' border='1' borderColor={'gray.200'}>
      <FormLabel htmlFor="tip-amount" fontSize={'lg'}>How much would you like to tip?</FormLabel>
      <select
        style={{ width: "100%", padding: '4px', backgroundColor: 'white', borderRadius: '2px', borderWidth: '2px', borderColor: 'grey.b00' }}
        id="tip-amount"
        value={tipPercentage}
        onChange={(event) => updateTip(event.target.value)}
      >
        <option value="15">15%</option>
        <option value="20">20%</option>
        <option value="25">25%</option>
      </select>
    </Stack>
  );
};

export default TipSelect;
