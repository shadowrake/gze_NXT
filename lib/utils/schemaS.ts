import {z} from 'zod';

//Defines the schema for the data sent from the client side form and validates it before sending it to the server
export const FormDataSchemas = z.object({
    name: z.string(),
    surname: z.string(),
    age: z.string(),
    gamerTag: z.string(),
    email: z.string().email("Please enter a valid email"),
    role: z.string(),
    joinTeam: z.string(),
    qualities: z.string(),
    teamManager: z.string(),
    anythingElse: z.string(),
});