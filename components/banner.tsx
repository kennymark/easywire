import { Avatar, Button, chakra, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { CheckCircleIcon } from "@chakra-ui/icons";



function Banner() {
  return (
    <Flex borderBottom='1px' borderColor='gray.200' justifyContent={{base:'space-evenly',md:'space-between'}} shadow='md' height={{base:200,lg:150}}  alignItems='center'  flexDir={{base:'column', md:'row'}} px={{base:4, lg:8}}>

      <Flex justifyContent='space-between' alignItems='center'>
        <Avatar size='lg' mr={5} src={'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=707b9c33066bf8808c934c8ab394dff6'} />

        <chakra.div>
          <Heading fontSize={{base:'lg',md:'3xl'}} mb={1}>Good morning, Emilia Birch</Heading>
          <Text fontSize='md' fontWeight='medium' color='gray.600'>Duke Street Studio,
          
          <chakra.span pl={5} >
            <CheckCircleIcon color='green.400' w={4} height={4}/>{" "} Verified Account
          </chakra.span>
          
          </Text>

        </chakra.div>

      </Flex>

      <chakra.div>
        <Button mr={5} variant='outline' shadow='sm' p={5} color='gray.600'>Add money</Button>
        <Button colorScheme="teal" shadow='sm' p={5}>Send money</Button>
      </chakra.div>

    </Flex>
  )
}

export default Banner
