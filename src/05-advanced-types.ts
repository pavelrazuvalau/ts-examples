import { ListItem } from "./04-features";

// Intersection types
interface PropertyOne {
    first: number;
}

interface PropertyTwo {
    second: number;
}

const intersectionPropertyMap: PropertyOne & PropertyTwo = {
    first: 1,
    second: 2,
}

// Union types
let smth: number | string | boolean = 'some stuff';
smth = 34;
smth = false;
smth = 'string';
// smth = {}; // Error

const unionPropertyMap: PropertyOne | PropertyTwo = {
    first: 1,
    // second: 2,
}

// Type aliases
type StringListItem = ListItem<string>;
const stringListItem: StringListItem = { data: 'this is the item', desc: 'description' };

type state = 'on' | 'off';
let someStatus: state = 'on';