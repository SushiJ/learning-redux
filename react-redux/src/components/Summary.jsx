import { Stack } from '@chakra-ui/react';
import SummaryLine from './SummaryLine';
import { toCurrency } from '../utilities';

export const Summary = ({ subtotal = 0, tipAmount = 0, total = 0 }) => {
  return (
    <Stack width='100%' orientation="vertical" spacing={'1'}>
      <SummaryLine title="Subtotal">{toCurrency(subtotal)}</SummaryLine>
      <SummaryLine title="Tip Amount">{toCurrency(tipAmount)}</SummaryLine>
      <SummaryLine title="Total">{toCurrency(total)}</SummaryLine>
    </Stack>
  );
};
