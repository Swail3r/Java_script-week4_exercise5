// TODO: Create a multiline string using template literals

let message = `
Hello world
This is a multiline string
created using template literals
`;

console.log(message);

// TODO: Create a function that uses template literals for HTML generation
// TODO: Convert regular functions to arrow functions

const generateHTML = (title, content) => {
  return `
    <html>
      <head>
        <title>${title}</title>
      </head>
      <body>
        <h1>${title}</h1>  
        <p>${content}</p>
      </body>
    </html>
  `;
};

console.log(generateHTML("Tundra", "Welcome to greatness."));

// TODO: Use arrow functions with array methods

let numbers = [1, 2, 3, 4, 5];

let squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers); 