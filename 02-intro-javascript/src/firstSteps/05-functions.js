const sayHi = function(name) {
    return `Hello, ${name}`;
}

const sayHiTwo = name => `Hello, ${name}`;

console.log(sayHi('Goku'));
console.log(sayHiTwo('Vegeta'));

const getUser = () => ({
    uid: 'ABC123456798',
    username: 'MyName01',
});

let user = getUser();
console.log('User: ',user);


const getActiveUser = (username) => ({
    uid: 'ABC123456798',
    username: username,
});

const activeUser = getActiveUser('Fernando');
console.log('Active user: ', activeUser);
