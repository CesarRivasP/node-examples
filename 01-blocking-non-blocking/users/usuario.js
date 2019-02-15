const getUserSync = (id) => {

  const startPoint = new Date().getTime()
  while(new Date().getTime() - startPoint <= 3000){
    //wait ...
    //Haciendo el fetch de base de datos
  }

  return {
    id,
    nombre: `Usuario ${id}`
  };
}

const getUser = (id, callback) => {

  let usuario = {
    id,
    nombre: `Usuario ${id}`
  }

  // wait ...
  // haciendo el fetch de base de datos
  setTimeout(() => callback(usuario), 3000);

}

module.exports = {
  getUserSync,
  getUser
}
