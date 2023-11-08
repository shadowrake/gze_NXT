import {z} from 'zod';

//Defines the schema for the data sent from the client side form and validates it before sending it to the server
export const FormDataSchema = z.object({
    game: z.string().nonempty("Please enter your awnser here"),
    discordTag: z.string().nonempty("Please enter your gamer tag here"),
    email: z.string().email("Please enter a valid email"),
    // input: z.array(z.object({
    //     name: z.string().nonempty("Please enter your awnser here"),
    //     id: z.string().nonempty("Please enter your awnser here"),
    //     dummy: z.string().nonempty("Please enter your awnser here")
    // })),
    age: z.string().nonempty("Please enter your awnser here"),
    hours: z.string().nonempty("Please enter your awnser here"),
    gamertag: z.string().nonempty("Please enter your awnser here"),
    role: z.string().nonempty("Please enter your awnser here"),
    rank: z.string().nonempty("Please enter your awnser here"),
    toxic: z.string().nonempty("Please enter your awnser here"),
    teamPlayer: z.string().nonempty("Please enter your awnser here"),
    prevExperience: z.string().nonempty("Please enter your awnser here"),
    ambitons: z.string().nonempty("Please enter your awnser here"),
    anythingElse: z.string(),
});