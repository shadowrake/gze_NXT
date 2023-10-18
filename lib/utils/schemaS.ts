import {z} from 'zod';

//Defines the schema for the data sent from the client side form and validates it before sending it to the server
export const FormDataSchemas = z.object({
    name: z.string().nonempty("Please enter your First name").min(2, "Please enter a valid First name"),
    surname: z.string().nonempty("Please enter your Last name").min(2, "Please enter a valid Last name"),
    age: z.string().nonempty("Please enter your age"),
    gamerTag: z.string(),
    email: z.string().email("Please enter a valid email"),
    role: z.string(),
    joinTeam: z.string().nonempty("Please enter your reason for wanting to join the team").min(10, "Please enter a valid reason for wanting to join the team"),
    qualities: z.string().nonempty("Please enter your qualities").min(10, "Please enter a valid qualities"),
    teamManager: z.string(),
    anythingElse: z.string(),
});