const fs = require('fs');
const path = require('path');

// Define paths
const inputFilePath = path.join(__dirname, 'index.mjml');
const outputFilePath = path.join(__dirname, 'index.html');

// Function to compile .mjml to .html
function compileMLJL() {
  try {
    // Read the .mjml file
    const mjmlContent = fs.readFileSync(inputFilePath, 'utf8');
    
    // Simple transformation (replace this with actual compilation logic if needed)
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email Template</title>
    </head>
    <body>
      ${mjmlContent}
    </body>
    </html>`;
    
    // Write the transformed content to .html
    fs.writeFileSync(outputFilePath, htmlContent);
    console.log('Compiled index.mjml to index.html');
  } catch (err) {
    console.error('Error compiling .mjml file:', err);
  }
}

// Watch the .mjml file for changes
fs.watchFile(inputFilePath, (curr, prev) => {
  console.log(`${inputFilePath} file changed. Recompiling...`);
  compileMLJL();
});

// Initial compilation
compileMLJL();
