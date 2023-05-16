import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack } from "@chakra-ui/react";
import SocialLogin from "./SocialLogin";
import {FaUserNinja, FaLock, FaEnvelope, FaUserSecret } from "react-icons/fa"

interface SignUpModalProps {
    isOpen:boolean;
    onClose:()=>void
}

export default function SignUpModal({isOpen, onClose}:SignUpModalProps){
    return (
        <Modal motionPreset="slideInBottom" onClose= {onClose} isOpen={isOpen}>
                    <ModalOverlay/>
                    <ModalContent>
                        <ModalHeader>Sign up</ModalHeader>
                        <ModalCloseButton></ModalCloseButton>
                        <ModalBody>
                            <VStack>

                            <InputGroup>
                                    <Input variant={"filled"} placeholder="Name" />
                                    <InputLeftElement children={
                                    <Box color={"gray.500"}>
                                        <FaUserSecret/>
                                    </Box>}/>
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement children={
                                    <Box color={"gray.500"}>
                                        <FaEnvelope/>
                                    </Box>}/>
                                    <Input variant={"filled"} placeholder="Email" /> 
                                </InputGroup>
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