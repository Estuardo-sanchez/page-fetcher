const fs = require('fs')
const request = require('request');

const url = process.argv[2];
const localPath = process.argv[3];

const download = function (url, localPath) {
  request(url, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    if (error) {
      console.log(error);
      return;
    }
    const content = body;

    fs.writeFile(localPath, content, err => {
      if (err) {
        console.error(err)
        return
      }
      console.log(`Downloaded and saved ${content.length} bytes to ${localPath}`);
      //file written successfully
    })
  });


};


download(url, localPath);



