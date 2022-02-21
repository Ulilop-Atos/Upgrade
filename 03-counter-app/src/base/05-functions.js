const sayHi = function(name) {
    return `Hello, ${name}`;
}

const sayHiTwo = name => `Hello, ${name}`;

export const getUser = () => ({
    uid: 'ABC123456798',
    username: 'MyName01',
});

export const getActiveUser = (username) => ({
    uid: 'ABC123456798',
    username: username,
});
