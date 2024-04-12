const fstream = require("fs");
fstream.writeFile("firstfile.txt", "Hello", (error) => {
    if (error) throw error;
    console.log("File Sucessfully Written")
})
fstream.readFile("firstfile.txt", "utf-8", (error, data) => {
    if (error) throw error;
    console.log(data)
})