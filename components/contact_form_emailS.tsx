import { z } from "zod";
import { FormDataSchemas } from "@lib/utils/schemaS";

//define the interface for the props
type ContactFormInputs = z.infer<typeof FormDataSchemas>

//define the component with the props for use in as a email template
const ContactFormS: React.FC<Readonly<ContactFormInputs>> = ({ email, gamerTag, role, joinTeam, qualities, teamManager, anythingElse, name, surname, age}) => {
    return <div>
        <h1></h1>
        <p>
            Fornavn: {name} {surname} <br /><br />
            Age: {age} <br /><br />
            Email: {email} <br /><br />
            Discord: {gamerTag} <br /><br />
            Role: {role} <br /><br />
            If team manager, what game? else, let it be blank: {teamManager} <br /><br />
            Why would you like to join our team?: <br /> {joinTeam} <br /><br />
            What qualities can you bring to the team?: <br /> {qualities} <br /><br />
            Anything else?: <br /> {anythingElse} <br /><br />
        </p>
    </div>;
}

export default ContactFormS;
