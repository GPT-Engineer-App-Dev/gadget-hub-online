import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.xl" pt={5}>
      <Heading as="h2" size="xl" mb={5}>About Us</Heading>
      <VStack spacing={8} alignItems="flex-start">
        <Text fontSize="lg" mb={4}>
          ElectroMart is your one-stop shop for the latest in electronic gadgets.
          From laptops and smartphones to headphones and accessories, we've got everything you need to stay connected and entertained.
        </Text>
        <Text fontSize="lg" mb={4}>
          Our mission is to provide high-quality products at affordable prices. We believe that technology should be accessible to everyone, which is why we work hard to source the best products from top manufacturers around the world.
        </Text>
        <Text fontSize="lg" mb={4}>
          Whether you're a tech enthusiast looking for the latest gadgets or someone who simply wants a reliable device for everyday use, we're here to help. Our friendly and knowledgeable staff are always on hand to provide expert advice and assistance.
        </Text>
      </VStack>
    </Container>
  );
}

export default About;