interface ContactFormInputs {
    email: string;
    gamerTag: string;
    input: { name: string; id: React.Key; dummy: string}[];
  };

const ContactForm: React.FC<Readonly<ContactFormInputs>> = ({ email, gamerTag, input }) => {
    return <div>
        <h1></h1>
        <p>
            Email: {email} <br />
            Discord: {gamerTag} <br />
            {input.map((person: {
                dummy: string; name: string; id: React.Key; }, index) => (
                <div key={person.id}>
                    <p>
                    {person.name}: {person.dummy}</p>
                </div>
            ))}
        </p>
    </div>;
}

export default ContactForm;
