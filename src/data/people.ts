export interface IPerson {
    name: string;
    password: string;
    title: string;
    greetingAdjective: string;
}

export const DefaultPerson : IPerson = {
    name: "",
    password: "",
    title: "",
    greetingAdjective: "",
}

export const People : IPerson[] = [
    {
        name: "Patrick",
        password: "SLAP",
        title: "Pancake Patrician",
        greetingAdjective: "revered",
    },
    {
        name: "Geth",
        password: "Goober",
        title: "Pancake Pope",
        greetingAdjective: "holy",
    },
    {
        name: "Ash",
        password: "fuck you",
        title: "Prolific Paige",
        greetingAdjective: "beloved",
    },
]