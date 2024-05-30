import { Box, Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" pt={5}>
      {/* Hero Section */}
      <Box
        bgImage="url('/images/hero-banner.jpg')"
        bgSize="cover"
        bgPos="center"
        color="white"
        p={10}
        borderRadius="md"
        mb={10}
      >
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to ElectroMart
        </Heading>
        <Text fontSize="xl" mb={4}>
          Your one-stop shop for all electronic gadgets!
        </Text>
        <Button as={RouterLink} to="/products" colorScheme="teal" size="lg">
          Shop Now
        </Button>
      </Box>

      {/* Sample Products Section */}
      <VStack spacing={8} alignItems="flex-start">
        <Heading as="h2" size="xl">Sample Products</Heading>
        <Box d="flex" flexWrap="wrap" justifyContent="space-between">
          <ProductCard 
            imgSrc="/images/laptop.jpg" 
            name="Laptop" 
            price="$999" 
            description="High performance laptop for all your needs." 
          />
          <ProductCard 
            imgSrc="/images/smartphone.jpg" 
            name="Smartphone" 
            price="$699" 
            description="Latest smartphone with cutting-edge features." 
          />
          <ProductCard 
            imgSrc="/images/headphones.jpg" 
            name="Headphones" 
            price="$199" 
            description="Noise-cancelling headphones for immersive experience." 
          />
        </Box>
      </VStack>
    </Container>
  );
}

const ProductCard = ({ imgSrc, name, price, description }) => (
  <Box 
    w={["100%", "45%", "30%"]} 
    borderWidth="1px"
    borderRadius="md"
    overflow="hidden"
    mb={4}
  >
    <Box bgImage={`url(${imgSrc})`} bgSize="cover" bgPos="center" height="200px" />
    <Box p={4}>
      <Heading as="h3" size="md" mb={2}>{name}</Heading>
      <Text fontSize="lg" color="teal.500" mb={2}>{price}</Text>
      <Text>{description}</Text>
    </Box>
  </Box>
);

export default Index;