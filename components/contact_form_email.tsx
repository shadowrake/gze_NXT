//define the interface for the props
interface ContactFormInputs {
    email: string;
    discordTag: string;
    age: string;
    hours: string;
    gamertag: string;
    role: string;
    rank: string;
    toxic: string;
    teamPlayer: string;
    prevExperience: string;
    ambitons: string;
    anythingElse: string;
  };

//define the component with the props for use in as a email template
const ContactForm: React.FC<Readonly<ContactFormInputs>> = ({ email, discordTag, age, hours, gamertag, role, rank, toxic, teamPlayer, prevExperience, ambitons, anythingElse}) => {
    return <div>
        <h1></h1>
        <p>
            Email: {email} <br /><br />
            Discord: {discordTag} <br /><br />
            How old are you?: {age} <br /><br />
            What is the gamertag you use most often?:{gamertag} <br /><br />
            How many hours do you have?: {hours} <br /><br />
            Which rank are you that is relavant to the game? (please link):<br /> {rank} <br /><br />
            Which role do you prefer?:<br /> {role} <br /><br />
            Are you toxic?: <br /> {toxic} <br /><br />
            Are you a team player?: <br /> {teamPlayer} <br /><br />
            What previous experience can you bring to the team?: <br /> {prevExperience} <br /><br />
            What are your ambitions for this season?:<br /> {ambitons} <br /><br />
            Anything else?: <br /> {anythingElse} <br /><br />
        </p>
    </div>;
}

export default ContactForm;
