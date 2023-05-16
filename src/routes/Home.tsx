import { useEffect, useState } from "react";
import { Box, Button, Grid, Heading, HStack, Image, Skeleton, SkeletonText, Text, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Room from "../components/Room";
import RoomSkeleton from "../components/RoomSkeleton";
import { getRooms } from "../api";
import { IRoomList } from "../types";

export default function Home() {

    const {isLoading, data} = useQuery<IRoomList[]>(["rooms"], getRooms)

    return (
         <Grid mt={"10px"} py={{base:10, lg:5}} px={40} columnGap={3} rowGap={8} 
    templateColumns={{sm:"1fr", md:"1fr 1fr", lg:"repeat(3, 1fr)", xl:"repeat(4, 1fr)"}}>
        {isLoading ? (<>
        <RoomSkeleton />
        <RoomSkeleton />
        <RoomSkeleton />
        <RoomSkeleton />
        <RoomSkeleton />
        <RoomSkeleton />
        <RoomSkeleton />
        <RoomSkeleton />
        </>) : null}
        {data?.map((room) => (
        <Room
            key={room.pk} 
            pk={room.pk}
            imgUrl={room.photos[0].file}
            name={room.name}
            rating={room.rating}
            city={room.city}
            country={room.country}
            price={room.price}
        />))}
    </Grid>
    )
}