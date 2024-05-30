import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Products = () => {
  return (
    <Container maxW="container.xl" pt={5}>
      <Heading as="h2" size="xl" mb={5}>Our Products</Heading>
      <VStack spacing={8} alignItems="flex-start">
        {/* List of Products */}
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
      </VStack>
    </Container>
  );
}

const ProductCard = ({ imgSrc, name, price, description }) => (
  <Box 
    w="100%" 
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

export default Products;