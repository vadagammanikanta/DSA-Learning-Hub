const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('Dsa.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('dsa_textbook.txt', data.text);
    console.log('PDF text extracted to dsa_textbook.txt');
}).catch(err => {
    console.error('Error extracting PDF:', err);
});
