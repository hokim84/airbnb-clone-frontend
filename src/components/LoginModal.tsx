import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack } from "@chakra-ui/react";
import SocialLogin from "./SocialLogin";
import {FaUserNinja, FaLock } from "react-icons/fa"

interface LoginModalProps {
    isOpen:boolean;
    onClose:()=>void
}

export default function LoginModal({isOpen, onClose}:LoginModalProps){
    return (
        <Modal motionPreset="slideInBottom" onClose= {onClose} isOpen={isOpen}>
                    <ModalOverlay/>
                    <ModalContent>
                        <ModalHeader>Log in</ModalHeader>
                        <ModalCloseButton></ModalCloseButton>
                        <ModalBody>
                            <VStack>
                                <InputGroup>
                                    <Input variant={"filled"} placeholder="UserName" />
                                    <InputLeftElement children={
                                    <Box color={"gray.500"}>
                                        <FaUserNinja/>
                                    </Box>}/>
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement children={
                                    <Box color={"gray.500"}>
                                        <FaLock/>
                                    </Box>}/>
                                    <Input variant={"filled"} placeholder="Password" /> 
                                </InputGroup>
                            </VStack>
                            <Button mt={4} colorScheme={"red"} width="100%">
                                Log in
                            </Button>
                            <SocialLogin/>
                        </ModalBody>
                    </ModalContent>
                </Modal>        
    )
}