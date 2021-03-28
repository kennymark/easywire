import { Avatar, chakra, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import { ChevronDownIcon, Search2Icon } from '@chakra-ui/icons'
import { NotificationIcon } from './icons';






const Header = () => {

  return (
    <Flex as="nav"
      p={5}
      color="gray.700"
      width='90%'
      justifyContent='space-between'
      mx='auto'
      borderBottom='1px'
      borderColor='gray.200'>

      <chakra.span display='flex' alignItems='center'>
        <Search2Icon color='gray.500' />
        <Input border='0' placeholder="Search" _hover={{}} />
      </chakra.span>

      <chakra.span display='flex' alignItems='center'>
        <chakra.span transform='scale(1.4)' mr={{ base: 2, md: 4 }}>
          <NotificationIcon />
        </chakra.span>
        <Avatar size='sm' src={`https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=707b9c33066bf8808c934c8ab394dff6'`} mr={4} />
        <Text color='gray.600' fontWeight='medium' mr={5}>Emily Birch</Text>
        <ChevronDownIcon w={6} h={8} />
      </chakra.span>



    </Flex >
  );
};

export default React.memo(Header)