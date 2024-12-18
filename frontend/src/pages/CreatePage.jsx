import { Container, VStack, Heading, Box, Button, Input } from '@chakra-ui/react';
// import { useToast } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';
import { useColorModeValue } from '../components/ui/color-mode';
import { useProductStore } from '../store/product';
const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: ""
  });

  // const toast = useToast();
  
  const {createProduct} = useProductStore();
  const handleAddProduct = async () => {
		const { success, message } = await createProduct(newProduct);
		// if (!success) {
    //   toast({
    //     title: "Error",
    //     description: message,
    //     status: "error", 
    //     isClosable: true,
    //   });
    // } else {
    //   toast({
    //     title: "Success",
    //     description: message,
    //     status: "success",  
    //     isClosable: true,
    //   });
		// }
    console.log("suncess: ",success);
    console.log("message: ",message);
	};

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>

        <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
          <VStack spacing={4} >
            <Input
              placeholder='Product Name'
              shadow={"sm"}
              rounded={"md"}
              name='name'
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
            <Input
              placeholder='Price'
              shadow={"sm"}
              rounded={"md"}
              name='price'
              type='number'
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
            <Input
              placeholder='Image URL'
              shadow={"sm"}
              rounded={"md"}
              name='image'
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            />

            <Button 
            colorScheme='blue'
            onClick={handleAddProduct}
            w='full'
            rounded={"md"}
            _active={{
              transform: "scale(0.9)",
              transition: "transform 0.7s ease",
            }}
            >
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage