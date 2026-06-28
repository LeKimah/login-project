export const obtenerUsuarios = () => {

 const data = localStorage.getItem("usuarios");

 return data ? JSON.parse(data) : [];

};

export const guardarUsuarios = (usuarios) => {

 localStorage.setItem(

   "usuarios",

   JSON.stringify(usuarios)

 );

};