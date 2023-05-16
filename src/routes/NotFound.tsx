import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return <VStack bg="gray.100" justifyContent={"center"} minH="100vh">
        <Heading>Page not found!</Heading>
        <Text>Ite seems that youre lost!</Text>
        <Link to="/">
            <Button colorScheme={"twitter"} variant={"solid"}>Go Home</Button>
        </Link>
    </VStack>
}