let { getUser } = require('./users/usuario');

console.log('Inicio de programa');

getUser(1, function(user1){
  console.log(user1);
});

getUser(2, function(user2){
  console.log(user2);
});

console.log('Hello world');
