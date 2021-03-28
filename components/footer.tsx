import { chakra, Flex } from "@chakra-ui/react";


function Footer() {
  return (
    <Flex as='footer' borderTop='1px' borderTopColor='gray.200' justifyContent='center' alignItems='center' height={100}>
      <chakra.a href='https://tailwindui.com/img/components/home-screens.02-card-layout-with-sidebar-xl.png' pr={3}>Design by TailwindUI</chakra.a>
      <chakra.span textAlign='center'>Copyright Kenny Coffie 2020</chakra.span>
    </Flex>
  );
}

export default Footer;
