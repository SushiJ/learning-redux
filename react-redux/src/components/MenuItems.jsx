import { Stack, VStack } from '@chakra-ui/react';
import MenuItem from './MenuItem';

export const MenuItems = ({ items }) => {
  return (
    <Stack w='full'>
      {items.map((item) => (
        <MenuItem {...item} key={item.uuid} />
      ))}
    </Stack>
  );
};
