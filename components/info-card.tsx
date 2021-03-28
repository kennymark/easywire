import { Center, chakra, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function InfoCard({ card }) {

  let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <chakra.div shadow='md' rounded='xl' bg='white' h={150}>

      <Flex px={5}>

        <Center w='70px' transform='scale(1.5)'>{card.icon}</Center>

        <Center as={Stack} alignItems='flex-start' h={100}>
          <Text fontWeight='medium' color='gray.500'>{card.title}</Text>
          <Text fontSize='xl' fontWeight={600}>{dollarUS.format(card.amount)}</Text>
        </Center>

      </Flex>

      <Flex cursor='pointer'
        alignItems='center' bg='gray.50' height='50px' pl={5} borderBottomRadius='xl' >
        <Text fontWeight='medium' color='teal.500'>View all</Text>
      </Flex>

    </chakra.div>
  )
}

export default InfoCard
