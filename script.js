//your JS code here. If required.
// Create the student object
let student = {
  name: "John"
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj); // Returns an array of keys
}

// Testing the function
console.log(getKeys(student)); // Output: ["name"]
