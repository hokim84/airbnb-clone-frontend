import { Avatar, Box, Button, HStack, IconButton, LightMode, Stack, useColorMode, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import LoginModal from "./LoginModal";
import { FaAirbnb, FaMoon, FaSun } from "react-icons/fa"
import SignUpModal from "./SignUpModal";
import { Link } from "react-router-dom";
import useUser from "../lib/useUser";

export default function Header()
{
    const {userLoading, isLoggedIn, user } = useUser();
    const {isOpen:isLoginOpen, onClose:onLoginClose, onOpen:onLoginOpen} = useDisclosure();
    const {isOpen:isSignUpOpen, onClose:onSignUpClose, onOpen:onSignUpOpen} = useDisclosure();
    const {colorMode, toggleColorMode} = useColorMode();
    const logoColor = useColorModeValue("red.500", "red.200");
    const Icon = useColorModeValue(FaMoon, FaSun);

    return (
        <Stack justifyContent={"space-between"}
        spacing={{sm:4, md:0}}
        py={5} px={40} direction={{sm:"column", md:"row"} }  borderBottomWidth={1}>
            <Box color={logoColor}>
                <Link to="/">
                    <FaAirbnb size={48}/>
                </Link>
            </Box>
            <HStack spacing={"2"}>
                <IconButton onClick={toggleColorMode} variant={"ghost"} aria-label="Toggle Dark mode" 
                icon={<Icon/>}/>    
                {!userLoading? (
                    !isLoggedIn ? (
                    <>
                    <Button onClick={onLoginOpen}>Log in</Button>
                    <LightMode>
                    <Button onClick={onSignUpOpen} colorScheme={"red"}>Sign up</Button>
                    </LightMode>
                    </>
                    ) : (<Avatar size={"md"}/>
                )
            ) : null}
            </HStack>   
            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose}/>
            <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose}/>
        </Stack>
    )
} 