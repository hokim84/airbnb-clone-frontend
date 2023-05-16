
import {  FaRegHeart, FaStar} from "react-icons/fa";
import { Box, Button, Grid, HStack, Image, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";


interface IRoomProps {
    imgUrl:string;
    name:string ;
    rating:number;
    city:string;
    country:string;
    price:number;
    pk:number;
}

export default function Room({ pk, imgUrl, name, rating, city, country, price}:IRoomProps) {

    const gray = useColorModeValue("gray.600", "gray.300");

    return (                   
        <Link to={`/rooms/${pk}`}>
        <VStack spacing={-0.5} alignItems={"flex-start"}>
            <Box position={"relative"} mb={2} overflow={"hidden"} rounded={"3xl"}>
                <Image h="280" src={imgUrl} />
                <Button variant={"unstyled"} position={"absolute"} top={5} right={5} color="white">
                    <FaRegHeart size={"20px"} />
                </Button>
            </Box>
            <Box>
                <Grid templateColumns={"6fr 1fr"}>
                    <Text display={"block"} as="b" noOfLines={1} fontSize ="md">
                        {name}
                    </Text>
                    <HStack _hover = {{
                        color:"red"
                    }} spacing={1} alignItems="center">
                        <FaStar size={15}></FaStar>
                        <Text>{rating}</Text>
                    </HStack>
                </Grid>
                <Text fontSize={"sm"} color={gray}>
                    {city}, {country}
                </Text>
                <Text fontSize={"sm"} color={gray}>
                    <Text as={"b"}>${price}</Text> / night
                </Text>
            </Box>
        </VStack>
        </Link>
        )

}