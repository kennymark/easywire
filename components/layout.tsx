import Header from "./header";
import Footer from "./footer";
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import React from 'react';
import SEO from './seo';
import Banner from './banner';
import SidebarItems from './side-bar';


interface Props {
  sm?: boolean;
  children?: any;
}

function Layout({ children, }: Props) {
  return (
    <Flex direction='column' >
      <SEO title='EasyWire - Send money internationally' />

      <Grid templateColumns="repeat(6, 1fr)">

        <GridItem colSpan={{ base: 0, lg: 1 }} display={{ base: 'none', md: 'initial' }} h="100vh" bg="main" px={3} pos='sticky' top={0} bottom={0}>
          <SidebarItems />
        </GridItem>

        <GridItem colSpan={{ base: 6, lg: 5 }}>
          <Header />
          <Banner />

          <Box mx='auto' p={10} minH='80vh' bg='gray.100'>
            {children}
          </Box>

        </GridItem>
      </Grid>

      <Footer />
    </Flex>
  );
}


export default Layout;
