const fs = require("fs");

// Sync...

fs.writeFileSync("./test.txt", "My Name is Biltu Samanta");
fs.writeFileSync("./test.txt", "My Name is Ram Samanta");

// It delete "Biltu" name and over-write "ram" name if you want new names append then use "append" function

const name = fs.readFileSync("./test.txt", "utf-8");

console.log(name);

fs.appendFileSync("./contacts.txt", "+912222222\n");
fs.appendFileSync("./contacts.txt", "+913333333\n");

// const contact = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(contact);

// aSync...

fs.readFile("./contacts.txt", "utf-8", (err, result) => { // use callback function
    if (err) {
        console.log("Error !", err);
    } else {
        console.log(result);
    }
})


