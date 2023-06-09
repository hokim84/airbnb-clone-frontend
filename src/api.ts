import { QueryFunctionContext } from '@tanstack/react-query';
import axios from 'axios';

const instance = axios.create({
    baseURL:"http://127.0.0.1:8000/api/v1",
});

export const getRooms = () => 
instance.get("rooms/").then((response) => response.data);


export const getRoom = ({queryKey}:QueryFunctionContext) => {
    const [_, roomPk] = queryKey;
    return instance.get(`rooms/${roomPk}`).then((response) => response.data);
};

export const getReviews = ({queryKey}:QueryFunctionContext) => {
    const [_, roomPk] = queryKey;
    return instance.get(`rooms/${roomPk}/reviews`).then((response) => response.data);
};

export const getMe = () => instance.get('user/me').then(response => response.data);