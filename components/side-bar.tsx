import React from 'react'
import { Heading, Text, chakra, Flex } from "@chakra-ui/react";
import { BalanceIcon, CardIcon, ClockIcon, HelpIcon, HomeIcon, PrivacyIcon, RecipientsIcon, ReportIcon, SettingsIcon } from './icons';


function SidebarItems() {
  return (
    <>

      <Heading mb={50} mt={10} color='gray.100' textAlign='center'>
        easywire
      </Heading>

      {data.map(item => {

        return (
          <Flex alignItems='center' fontWeight='medium' cursor='pointer' bg={item.title === 'home' && 'selected'} p={3} rounded='md' >
            <chakra.span>{item.icon}</chakra.span>
            <Text color='gray.300' textTransform='capitalize' > {item.title}</Text>
          </Flex >
        )
      })}

      <chakra.div my={10} bg='selected' h='1px' />

      {
        other.map(item =>
          <Flex alignItems='center' fontWeight='medium' cursor='pointer' bg={item.title === 'home' && 'selected'} p={3} rounded='md' >
            <chakra.span>{item.icon}</chakra.span>
            <Text color='gray.300' textTransform='capitalize' > {item.title}</Text>
          </Flex >
        )
      }




    </>
  )
}


export default SidebarItems


const data = [
  { title: 'home', icon: <HomeIcon /> },
  { title: 'history', icon: <ClockIcon /> },
  { title: 'balances', icon: <BalanceIcon /> },
  { title: 'cards', icon: <CardIcon /> },
  { title: 'recipients', icon: <RecipientsIcon /> },
  { title: 'reports', icon: <ReportIcon /> },
]

const other = [
  { title: 'settings', icon: <SettingsIcon /> },
  { title: 'help', icon: <HelpIcon /> },
  { title: 'privacy', icon: <PrivacyIcon /> },

]