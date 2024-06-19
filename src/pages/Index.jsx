import { Container, Text, VStack, Heading, Box, Image, Link, Button, useColorMode, HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom"; // Import RouterLink for navigation
import { useState } from "react"; // Import useState for managing state

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode} position="fixed" top="1rem" right="1rem">
      {colorMode === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
};

const Index = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", content: "This is the first post." },
    { id: 2, title: "Second Post", content: "This is the second post." },
  ]);

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

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
        {posts.map(post => (
          <Box key={post.id} p={5} shadow="md" borderWidth="1px" width="100%">
            <Heading fontSize="xl">{post.title}</Heading>
            <Text mt={4}>{post.content}</Text>
            <HStack justifyContent="flex-end">
              <Button colorScheme="red" size="sm" onClick={() => handleDelete(post.id)}>Delete</Button>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;