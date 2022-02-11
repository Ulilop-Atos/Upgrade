const characters = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p3 ] = characters

console.log(p3);


const returnArray = () => ['ABC', 123];
const [ letters, numbers ] = returnArray();
console.log(letters, numbers);

const notUseState = (value) => [value, () => {console.log('Hello world!')}];

const [newName, setName] = notUseState('Goku');

console.log(newName);
setName();