let { getUserSync } = require('./users/usuario');

console.log('Inicio de programa');
//cada 3 sengundos
let user1 = getUserSync(1);
console.log('Usuario1: ', user1);

let user2 = getUserSync(2);
console.log('Usuario2: ', user2);

console.log('Hello world');
