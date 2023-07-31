var fs = require('fs')

fs.writeFile('data.txt', 'this is data for data.txt', function (err){
    if(err)
    console.log(err); 
    else
    console.log('Data written to data.txt');
});

fs.writeFile('data.txt', 'this is new data for data.txt', function (err){
    if(err)
    console.log(err); 
    else
    console.log('Data written to data.txt');
});

// data was changed

fs.appendFile('data.txt', ' This is new appended data for data.txt', function (err){
    if(err)
    console.log(err); 
    else
    console.log('Data append to data.txt');
});