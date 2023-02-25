import { Stack } from '@chakra-ui/react';
import { MenuItemContainer } from '../containers/MenuItemContainer';

export const MenuItems = ({ items }) => {
  return (
    <Stack w='full'>
      {items.map((item) => (
        <MenuItemContainer {...item} key={item.uuid} />
      ))}
    </Stack>
  );
};
