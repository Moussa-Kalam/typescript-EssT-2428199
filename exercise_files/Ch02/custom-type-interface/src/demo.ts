// Create a contact interface that merges Address

interface Contact extends Address {
    id: number;
    name: string;
    birthday?: Date; // Optional
}


// Create an address interface
interface Address {
    country: string;
    city: string;
    area: string;
}

let primaryContact: Contact = {
    // contact information
    birthday: new Date("13-04-1998"),
    id: 12345, // number
    name: "Moussa Kalam AMZAT", // string
    // Address information
    country: "Rwanda",
    city: "Kigali",
    area: "Kimironko"
}

console.log(primaryContact);