interface Contact {
    id: IdNumber;  // alias used
    name: ContactName; // alias used
    birthDate?: Date;
}

let primaryContact: Contact = {
    birthDate: new Date("01-01-1980"),
    id: 12345,
    name: "Jamie Johnson",
}


// Design your own custom type using alias

type ContactName = string;
type IdNumber = number;
