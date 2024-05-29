const job = "Profesor";

const data = {
  // Contante declarada como objeto (Lo que se modifique adentro de la encapculamiento no le importa a JSON)
  name: "Juana", // Propiedad
  age: 30,
  job,
  active: true,
  hobbies: ["Read books", "Play games", "Sleep"], //coma para seguir con una nueva propiedad
  studies: {
    primary: "Argelino Duran",
    school: "Alfonso Lopez",
    college: "UFPSO",
  },
  greeting: function () {
    console.log ("Te hablo desde la prisión")
  }
};

data.name = "pepe";
data.lastname = "lopez";

delete data.active; // borrar propiedad

//console.log(data.name, data.lastname, data.active);
data.greeting()                          // asi llamas la funcion dentro de una propiedad

const drink = '{"ingredients":[{"idIngredient":"552","strIngredient":"Elderflower cordial","strDescription":"Elderflower cordial is a soft drink made largely from a refined sugar and water solution and uses the flowers of the European elderberry. Historically the cordial has been popular in North Western Europe where it has a strong Victorian heritage.","strType":"Cordial","strAlcohol":"No","strABV":null}]}'

//console.log(JSON.stringify(data))    para ver todo como en una lista

const drinkObj = JSON.parse(drink)
console.log(drinkObj.ingredients)





// para ejecutar el programa ubicarse en la carpeta del archivo y escribir "node . (ruta del archivo) "
