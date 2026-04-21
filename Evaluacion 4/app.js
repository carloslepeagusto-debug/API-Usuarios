class Usuarios {

constructor(){

this.usuarios = [];

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

xhr.onload = () => {

if(xhr.status === 200){

this.usuarios = JSON.parse(xhr.responseText);

console.log("Datos cargados correctamente");

}

};

xhr.send();

}


listarNombres(){

this.usuarios.forEach(usuario => {

console.log(usuario.name);

});

}



buscarBasico(){

let nombre = prompt("Ingrese nombre del usuario");

let usuario = this.usuarios.find(u =>

u.name.toLowerCase() === nombre.toLowerCase()

);

if(usuario){

console.log("Username:", usuario.username);
console.log("Email:", usuario.email);

}else{

console.log("Usuario no encontrado");

}

}



buscarDireccion(){

let nombre = prompt("Ingrese nombre del usuario");

let usuario = this.usuarios.find(u =>

u.name.toLowerCase() === nombre.toLowerCase()

);

if(usuario){

console.log("Street:", usuario.address.street);
console.log("Suite:", usuario.address.suite);
console.log("City:", usuario.address.city);
console.log("Zipcode:", usuario.address.zipcode);
console.log("Lat:", usuario.address.geo.lat);
console.log("Lng:", usuario.address.geo.lng);

}else{

console.log("Usuario no encontrado");

}

}



buscarAvanzado(){

let nombre = prompt("Ingrese nombre del usuario");

let usuario = this.usuarios.find(u =>

u.name.toLowerCase() === nombre.toLowerCase()

);

if(usuario){

console.log("Teléfono:", usuario.phone);
console.log("Website:", usuario.website);

console.log("Empresa:", usuario.company.name);
console.log("CatchPhrase:", usuario.company.catchPhrase);
console.log("BS:", usuario.company.bs);

}else{

console.log("Usuario no encontrado");

}

}



listarCompanias(){

this.usuarios.forEach(usuario => {

console.log("Empresa:", usuario.company.name);
console.log("CatchPhrase:", usuario.company.catchPhrase);
console.log("-------------------");

});

}


ordenarUsuarios(){

let ordenados = [...this.usuarios].sort((a,b)=>

a.name.localeCompare(b.name)

);

ordenados.forEach(usuario => {

console.log(usuario.name);

});

}

}

const usuarios = new Usuarios();