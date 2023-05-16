
import { Avatar, Box, Container, Grid, GridItem, Heading, HStack, Image, Skeleton, Text, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Children } from "react";
import {FaStar} from "react-icons/fa";
import {useParams} from "react-router-dom";
import { getRoom, getReviews } from "../api";
import { IReview, IRoomDetail } from "../types";

export default function RoomDetail(){
    const {roomPk} = useParams();
    const {isLoading, data} = useQuery<IRoomDetail>([`rooms`, roomPk], getRoom);
    const {data: reviewsData, isLoading: isReviewsLoading} = useQuery<IReview[]>(['rooms', roomPk, 'reviews'], getReviews);

    return (
    <Box 
        mt={10} 
        px={{base: 10, lg: 40, }}
        >
            <Skeleton height={"43px"} width="25%" isLoaded={!isLoading}>
                <Heading>{data?.name}</Heading>
            </Skeleton>
            <Grid 
            gap={3}
            mt={8} 
            rounded="xl"
            overflow={"hidden"}
            height="60vh" 
            templateRows={"1fr 1fr"} 
            templateColumns={"repeat(4, 1fr)"}
            >
                {[0, 1, 2, 3, 4].map((photo, index)=>
                <GridItem 
                colSpan={ index===0 ? 2 : 1}
                rowSpan={index === 0 ? 2 : 1}
                overflow={"hidden"}
                key={index}>
                    <Skeleton isLoaded={!isLoading} h="100%" w="100%">
                    <Image objectFit={"cover"} w="100%" h="100%" src={data?.photos[index].file} />
                    </Skeleton>
                </GridItem>)}
            </Grid>
            <HStack width="40%" justifyContent={"space-between"} mt={10}>
                <VStack justifyContent={"flex-start"}>
                    <Skeleton isLoaded={!isLoading} height={"30px"}>
                        <Heading fontSize={"2xl"}>House hosted by {data?.owner.name}</Heading>
                        <Skeleton isLoaded={!isLoading} height={"30px"}>
                            <HStack justifyContent="flex-start" w={"100%"}>
                                <Text>{data?.toilets} toilet{data?.toilets === 1 ? '' : 's'}</Text>
                                <Text>•</Text>
                                <Text>{data?.rooms} room{data?.rooms === 1 ? '' : 's'}</Text>
                            </HStack>
                        </Skeleton>
                    </Skeleton>
                </VStack>
                <Avatar name={data?.owner.name} size={"xl"} src={data?.owner.avatar}/>
            </HStack>
            <Skeleton isLoaded={!isReviewsLoading} h="100%" w={"100%"}>
                <Box mt={10}>
                    <Heading mb={5} fontSize={"2xl"}>
                        <HStack>
                            <FaStar /> <Text>{data?.rating}</Text>
                            <Text>•</Text>
                            <Text>{reviewsData?.length} review{reviewsData?.length === 1 ? '' : 's'}</Text>
                        </HStack>
                    </Heading>
                    <Container mt={15} maxW={"container.lg"} marginX="None">
                        <Grid gap={10} templateColumns={"1fr 1fr"}>
                            {reviewsData?.map((review, index) => (
                            <VStack alignItems={"flex-start"} key = {index} >
                                <HStack>
                                    <Avatar mb={"40px"} name={review.user.name} src={review.user.avatar} size="md"/>
                                    <VStack spacing={0} alignItems={"flex-start"}>
                                        <Heading fontSize={"md"}>{review.user.name}</Heading>
                                        <HStack spacing={1}>
                                            <FaStar size="12px" />
                                            <Text>{review.rating}</Text>
                                        </HStack>
                                        <Text>{review.payload}</Text>
                                    </VStack>
                                </HStack>
                            </VStack>
                            ))}
                        </Grid>
                    </Container>
                </Box>
            </Skeleton>
        </Box>
    );
}
