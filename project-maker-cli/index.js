#!/usr/bin/env node

// index.js
const fs = require('fs');
const path = require('path');

// Get the project name from the 3rd item in the array
const projectName = process.argv[2];

// Add a check in case the user forgets to add a name
if (!projectName) {
    console.error('Error: Please provide a name for your project.');
    console.log('Usage: node index.js <project-name>');
    process.exit(1); // this stops the script
}

//          TEMPLATES

// This is the basic HTML boilerplate generated in the new file
const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${projectName}</title>
    <link rel="stylesheet" href="style.css"
</head>
<body>
    <h1>Welcome to ${projectName}!<h1>
    <script src="script.js"></script>
</body>
</html>
`;

// defining content for other files
const cssTemplate = `/* Your CSS goes here */
body {
    background: #f4f4f4;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    align-items: center;
    justify-content: center;
}`;

const jsTemplate = `// Your JavaScript goes here
console.log("Hello from ${projectName}!");`;

// Script Logic

// If we have a name, print a success message
console.log(`Starting to create your new project called: ${projectName}`);

try {
    // 1. Create the main project folder
    fs.mkdirSync(projectName);

    // 2. Create the files *inside* the new folder
    // We use path.join() to create a correct file path
    fs.writeFileSync(path.join(projectName, 'index.html'), htmlTemplate);
    fs.writeFileSync(path.join(projectName, 'style.css'), cssTemplate);
    fs.writeFileSync(path.join(projectName, 'script.js'), jsTemplate);

    // 3. Log a final success message
    console.log('Success! Your new project is ready.');
    console.log(`You can find it in the ./${projectName} folder.`);

} catch (err) {
    // Log an error if something went wrong
    console.error(`Whoops! Something went wrong: ${err.message}`);
    process.exit(1); // stop the script
}