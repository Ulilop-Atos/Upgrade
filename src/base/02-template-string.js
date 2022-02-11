const first_name = 'Fernando';
const last_name = 'Cortes';

const full_name = `${first_name} ${last_name}`;

export function getHello(name_str = 'world') {
    return `Hello ${name_str}`;
}