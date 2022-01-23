const fs = require('fs');

const createMarkdown = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
    
            resolve({
                ok: true,
                message: 'README created!'
            });
        });
    });
};

module.exports = createMarkdown;