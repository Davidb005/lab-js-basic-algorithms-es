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
for (const value of Name) {
  console.log(value.toUpperCase());
}

for (let i = Name.length - 1; i >= 0; i--) {
  console.log(Name[i]);
}

// Preguntar acerca del punto 3.3 - Problemas con el orden lexicográfico
const sentences = [
  "El nombre del conductor va primero",
  "¿Qué? ¿Los dos tienen el mismo nombre?",
  "Yo, el navegador va primero definitivamente",
];

sentences.sort();

console.log(sentences);
// Preguntar acerca del punto 3.3 - Problemas con el orden lexicográfico



// Bonificación 1: Lorem Ipsum generator:

let Text = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue, diam quis bibendum tempus, ex justo gravida neque, sed venenatis lectus purus sed tortor. Proin dapibus consectetur risus a dapibus. Etiam massa metus, vestibulum a consequat laoreet, maximus nec lorem. Suspendisse molestie, odio eget semper finibus, orci nisl mattis erat, id suscipit neque quam ac ligula. Donec nisl odio, placerat eu venenatis eu, dictum quis ex. Mauris nunc ex, faucibus eget est ac, mollis eleifend eros. Morbi varius ultricies lacus. Vivamus maximus dui in mauris egestas, quis euismod ipsum egestas. Aenean iaculis, dolor eget placerat tincidunt, ligula erat congue ex, sed lacinia arcu nisi semper nibh. Integer facilisis elit id urna egestas vulputate. Quisque pulvinar lacus at scelerisque scelerisque. Suspendisse euismod consequat mauris. Ut sit amet dui iaculis, tincidunt purus at, maximus leo. Fusce placerat, ipsum non consequat molestie, ligula tellus iaculis enim, nec accumsan eros felis nec quam. Proin viverra sapien non sagittis vestibulum. Nunc lectus mi, dictum eget sagittis id, sagittis at justo. In elementum at lacus ut faucibus. Nulla lacinia tempus neque, ut mattis mi tristique ut. Nam vel massa at purus euismod elementum in sed purus. Nam convallis vitae quam et tempor. Nunc commodo dictum nisl eu ornare. Donec feugiat ipsum gravida purus luctus placerat. Morbi consequat mi augue, et fringilla dolor porttitor a. Cras blandit, eros ut rhoncus venenatis, orci massa posuere libero, id lacinia leo eros id elit. In iaculis augue non porta tempus. In rutrum nisl felis, consequat bibendum erat laoreet non. Nam posuere augue at ex imperdiet condimentum. Aliquam vestibulum elit tortor, venenatis ultricies felis ullamcorper fermentum. Maecenas risus mauris, pharetra at tristique vitae, pulvinar non leo. Vivamus dignissim mi non ante tempor posuere.",
];

function wordCount(Text) {
  Text = Text.trim();
  if (Text === " ") return 0;
  let words = Text.split(/\s+/);
  return words.length;
}

let paragraph = Text[0];
let wordNumber = wordCount(paragraph);
console.log("Número de palabras: ", wordNumber);



// Revisar Sábado(?)



// let count = 0;

    // if (i.toLowerCase() === word.toLowerCase()) {
    //     count++;
    // }
    // return count;});}

// // words.forEach(function (i) {
// //   if (i.toLowerCase() === word.toLowerCase()) {
// //       count++;
// //   }
// //   return count;});

// function(countSpecificWord) = paragraph, specificWord
//     let specificWord ="et";
//     let specificWordCount=countSpecificWord(paragraph, specificWord)
//     console.log("Número de veces que aparece la palabra et: ", specificWordCount)

// Bonificación 2: Palíndromos: (preguntar también Sábado)