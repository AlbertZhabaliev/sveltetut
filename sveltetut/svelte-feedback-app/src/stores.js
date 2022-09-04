import { writable } from "svelte/store";    
export const FeedbackStore = writable([{
    id: 1,
    rating: 5,
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod quia. Quisquam, quod quia. ",
},
{
    id: 2,
    rating: 4,
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod quia. Quisquam, quod quia. ",
},
{
    id: 3,
    rating: 3,
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod quia. Quisquam, quod quia. ",
},]);