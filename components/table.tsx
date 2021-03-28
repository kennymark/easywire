import { chakra, Table, Tag, TagLabel, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import { CashIcon } from './icons';

function DataTable() {

  return (
    <chakra.div rounded='xl' shadow='md' border='1px' p={1} borderColor='gray.200' bg='white' overflowX='scroll'>
      <Table   >
        <Thead>
          <Tr bg='gray.50' h={50} >
            {headers.map(header => (
              <Th color='gray.600'>{header}</Th>
            ))}
          </Tr>
        </Thead>

        <Tbody bg='white' fontWeight={500} >
          {tableData.map(data => (
            <Tr color='gray.500' >
              <Td fontSize='md' display='flex'>
                <CashIcon />Payment to {data.to}</Td>
              <Td fontSize='md'>{dollarUS.format(data.amount)} USD</Td>
              <Td fontSize='md'>
                <Tag size="md" colorScheme="green" borderRadius="full">
                  <TagLabel>{data.status}</TagLabel>
                </Tag>
              </Td>

              <Td fontSize='md'>{data.date}</Td>
            </Tr>
          ))}
        </Tbody>

      </Table>
    </chakra.div>

  )
}

let dollarUS = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const headers = ['transaction', 'amount', 'status', 'date']
const tableData = [
  {
    to: 'Molly Sanders',
    amount: 20_000,
    status: 'success',
    date: 'July 11, 2020'
  },
  {
    to: 'Doug Mann',
    amount: 19_500,
    status: 'success',
    date: 'Sept 31, 2018'
  },
  {
    to: 'Erica Frost',
    amount: 8_700,
    status: 'success',
    date: 'Jan 1, 2000'
  },
  {
    to: 'Miley Davis',
    amount: 20_000,
    status: 'success',
    date: 'Aug 12, 2014'
  },
  {
    to: 'Martha Steward',
    amount: 300,
    status: 'success',
    date: 'Feb 11, 2020'
  },
  {
    to: 'Calvin Klein',
    amount: 4580,
    status: 'success',
    date: 'Mar 11, 2021'
  },

]

export default DataTable
