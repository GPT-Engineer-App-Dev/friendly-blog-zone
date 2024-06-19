import { Container, Text, VStack, Heading, Box, Image, Link, Button, useColorMode } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom"; // Import RouterLink for navigation

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode} position="fixed" top="1rem" right="1rem">
      {colorMode === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
};

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <ColorModeSwitcher />
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Blog</Heading>
        <Box boxSize="sm">
          <Image src="/images/blog-image.jpg" alt="Blog Image" borderRadius="md" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Hi there! I'm excited to share my thoughts and experiences with you. Stay tuned for more updates!
        </Text>
        <Link href="https://example.com" color="teal.500" isExternal>
          Visit my profile
        </Link>
        <Button as={RouterLink} to="/add-post" colorScheme="teal" size="md">Add New Post</Button> {/* Add button to navigate to AddPost */}
      </VStack>
    </Container>
  );
};

export default Index;