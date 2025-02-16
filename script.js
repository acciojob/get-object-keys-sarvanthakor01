//your JS code here. If required.
// Define the student object
const student = {
  name: "John",
};

// Function to get all keys from an object
function getKeys(obj) {
  return Object.keys(obj);
}

// Example usage:
const myObj = { name: "John", age: 30, city: "New York" };
console.log(getKeys(myObj)); // Output: ["name", "age", "city"]

// Expose function to the global scope for Cypress tests
window.getKeys = getKeys;
