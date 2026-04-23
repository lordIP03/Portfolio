const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('Resume.pdf');
const parser = pdf.default || pdf;

parser(dataBuffer).then(function(data) {
    console.log("=== PDF TEXT START ===");
    console.log(data.text);
    console.log("=== PDF TEXT END ===");
}).catch(err => {
    console.error("Error parsing:");
    console.error(err);
});
