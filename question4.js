const person = {
    name: "Anna",
    age: 25,
    stad: "Stockholm",
};

function greeting(name, city) {
    return "Hej, jag heter {name} och bor i {city}";
}

const { name, stad: city } = person;

console.log(greeting(name, city)); 


