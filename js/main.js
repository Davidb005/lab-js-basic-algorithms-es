console.log("¡Estoy listo!");
let hacker1 = "controlador";
console.log("El nombre del conductor es ", hacker1);
let hacker2 = "navegador";
console.log("El nombre del navegante es", hacker2);
if (hacker1.length > hacker2.length) {
  console.log(
    "El conductor tiene el nombre más largo, tiene",
    hacker1.length,
    "caracteres"
  );
} else if (hacker1.lenght === hacker2.lenght) {
  console.log(
    "¡Vaya, ambos tienen nombres igual de largos, tienen",
    hacker1.length,
    "caracteres"
  );
} else {
  console.log(
    "Parece que el navegante tiene el nombre más largo tiene",
    hacker2.length,
    "caracteres"
  );
}

const Name = "John";
for (const value of Name){
    console.log(value.toUpperCase());
}

for (let i = 0; i < 5; i++){
console.log(Name[i])
}