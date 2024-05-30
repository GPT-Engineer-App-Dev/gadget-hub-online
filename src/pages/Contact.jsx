import { Box, Container, Heading, Text, VStack, Input, Button, FormControl, FormLabel, Textarea } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="container.xl" pt={5}>
      <Heading as="h2" size="xl" mb={5}>Contact Us</Heading>
      <VStack spacing={8} alignItems="flex-start">
        <Text fontSize="lg" mb={4}>
          Have questions or need assistance? Get in touch with us using the form below.
        </Text>
        <FormControl id="name" mb={4}>
          <FormLabel>Your Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email" mb={4}>
          <FormLabel>Your Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="message" mb={4}>
          <FormLabel>Your Message</FormLabel>
          <Textarea />
        </FormControl>
        <Button colorScheme="teal" size="lg">
          Submit
        </Button>
      </VStack>
    </Container>
  );
}

export default Contact;