const fs = require('fs');
const path = require('path');

const directory = './public/sequence';

fs.readdir(directory, (err, files) => {
  if (err) throw err;

  // Filter for jpg files and sort them to ensure they stay in order
  const jpgFiles = files.filter(file => file.endsWith('.jpg')).sort();

  console.log(`Found ${jpgFiles.length} files. Renaming...`);

  jpgFiles.forEach((file, index) => {
    const oldPath = path.join(directory, file);
    
    // This converts index 0 -> "0001.jpg", index 190 -> "0191.jpg"
    const newName = (index + 1).toString().padStart(4, '0') + '.jpg';
    const newPath = path.join(directory, newName);

    fs.rename(oldPath, newPath, err => {
      if (err) console.log('ERROR: ' + err);
    });
  });
  
  console.log('Done! filenames are now 0001.jpg to 0191.jpg');
});