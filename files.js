const fs = require('fs');

// Reading files 

// fs.readFile('./docs/blog1.txt', (err, data) =>{
//     if(err)
//     {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line');

// Writing files

// fs.writeFile('./docs/blog1.txt', 'wassup neenjas', () => {
//     console.log('file was written');
// });

// fs.writeFile('./docs/blog2.txt', 'hello again, my neenjas', () => {
//     console.log('file was written');
// });

// Directories

if(!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) 
        {
            console.log(err);
        }
        console.log('folder created');
    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    })
}

// Deleting Files

if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}