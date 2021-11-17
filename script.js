
const shoppingCart = [
   { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
   { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
   { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
   { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
   { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
   { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
   { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
 ];

// Searching if there is an "id" in the array.
 const hasId = cart => cart.some(cart => cart.id); 
 console.log(hasId(shoppingCart)); 

// Function that returns the first element.
const head = cart => cart.reduce((categories, cart) => categories + ' | ' + cart.category, ' '); 
console.log(head(shoppingCart)); 

// Function that returns the first element. 
const getHead = cart => 
cart 
.map(cart => cart.category)
.sort()
.join(','); 

console.log(getHead(shoppingCart)); 

// Function that returns a new array with all the elements except the first. (array as input)
var tail = ["item 1", "item 2", "item 3", "item 4"];
const [, ...rest] = tail;
console.log(rest); 

// swapFirstToLast (array as input)
const swapFirstToLast = ["Rammstein", "Motorhead", "Imsomnium", "Bear"];
[swapFirstToLast[0], swapFirstToLast[3]] = [swapFirstToLast[3], swapFirstToLast[0]]; 
console.log(swapFirstToLast); 

// function that returns cloned object except for the id property if there is one.(object as input)

const user = {
   id: 4451234,
   name: "Javi", 
   surname: "Calzado", 
   age: 36,
   };

   const { id, ...excludeId } = user;
   console.log(excludeId);


// wordsStartingWithA function that returns another filtered array with those words that start with a.(array as input)
const names = ["Amalia", "Anna", "Stefania", "Anastasia", "Julia"]; 
const wordsStartingWithA = names.filter((startsA) => startsA.startsWith("A")); 
console.log(wordsStartingWithA); 


// concat Implements a function called concat such that admits multiple arguments of type string and returns another string with the concatenation of all, separated by |.

const myArray = ["Berlin", "Moscow","Paris", "Helsinki"]; 
const concat = myArray.join(" | "); 
console.log(concat);


// multArray Implements a function called multArray that admits an array of numbers (arr) and another parameter that is a number (x) and returns a new array where each element has been multiplied by x.

const arr = [1,2,3,4,5,6,7,8,9,10]; 
const multArray = arr.map(x => x * 2); 
console.log(multArray); 


// calcMult Implement a function called calcMult that takes multiple numbers as arguments and returns the product of all of them as a result.

const myNumbers = [5,5,5]; 
const calcMult = myNumbers.reduce((a,b)=> {
   return a * b}
);
console.log('The result is : ' + calcMult); 


// Ejercicios Extra

// A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.
const tax = shoppingCart.map(element => {
element.IVA = Math.round(element.price * 21)/100; 
return element;
})
console.log(tax); 

// B. Ordena la lista de más a menos unidades.
const getMaxtoMin = cart => cart.sort((a,b) => (a.units > b.units ? -1 : 1)); 
console.log(getMaxtoMin(shoppingCart)); 

// C. Obtén el subtotal gastado en droguería.
const pharmacy = shoppingCart.filter(element => element.category === "Droguería")
   .map(element => element.price * element.units)
   .reduce((a,b) => a + b); 
   console.log(pharmacy); 


// D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.
const sortElement = shoppingCart.sort((a,b) => (a.category > b.category ? 1 : -1))
.map(element => {element.total = element.price * element.units;
   return element;
})

console.log(sortElement); 
