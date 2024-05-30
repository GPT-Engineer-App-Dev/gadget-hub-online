import { Box, Flex, HStack, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="teal.500" color="white" p={4} mt={10}>
      <Flex h={16} alignItems="center" justifyContent="space-between" flexDirection={["column", "row"]}>
        <HStack spacing={8} alignItems="center">
          <Link href="/privacy-policy" color="white">Privacy Policy</Link>
          <Link href="/terms-of-service" color="white">Terms of Service</Link>
        </HStack>
        <HStack spacing={4} mt={[4, 0]}>
          <Link href="#" color="white"><FaFacebook size="24px" /></Link>
          <Link href="#" color="white"><FaTwitter size="24px" /></Link>
          <Link href="#" color="white"><FaInstagram size="24px" /></Link>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Footer;