import {z} from 'zod';

export const FormDataSchema = z.object({
    name: z.string().nonempty("Please enter your awnser here"),
    gamerTag: z.string().nonempty("Please enter your gamer tag here"),
    email: z.string().email("Please enter a valid email"),
    input: z.array(z.object({
        name: z.string().nonempty("Please enter your awnser here"),
        id: z.string().nonempty("Please enter your awnser here"),
        dummy: z.string().nonempty("Please enter your awnser here")
    }))
});