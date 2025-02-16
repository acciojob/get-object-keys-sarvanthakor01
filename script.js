//your JS code here. If required.
// Create the student object
const myObj = { name: "John" };
const keys = getKeys(myObj); // ✅ Call the function directly
expect(keys).to.deep.equal(["name"]);
