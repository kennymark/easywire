import { SimpleGrid, Text } from "@chakra-ui/react";
import InfoCard from '../components/info-card';
import Layout from "../components/layout";
import DataTable from '../components/table';
import { BalanceIcon2, RefreshIcon, CheckIcon } from '../components/icons'


function IndexPage() {
  return (
    <Layout>

      <Text fontSize='xl' mb={3} fontWeight='medium'>Overview</Text>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={5}>
        {cards.map(card => (<InfoCard card={card} />))}

      </SimpleGrid>


      <Text fontSize='xl' mt={10} mb={3} fontWeight='medium'>Recent activity</Text>

      <DataTable />
    </Layout>
  );
}

const cards = [
  {
    title: 'Account balance',
    icon: <BalanceIcon2 />,
    amount: 30659.45
  },
  {
    title: 'Pending',
    icon: <RefreshIcon />,
    amount: -19500.00
  },

  {
    title: 'Processed (last 30 days)',
    icon: <CheckIcon />,
    amount: -20000.00
  },
]



export default IndexPage;
