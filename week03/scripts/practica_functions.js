// this is a normal function

function fullname(first, last) {
    return `${ first } ${ last }`;
}

// this is a anonymus function

const fullname = function (firt, last) {
    return `${first} ${last}`;
}

// this is a arrow function expression

const fullname = (firstname, lastname) => `${FileSystem} ${lastname}`

// Write an expression that calls the fullName function declaration and writes the result to an existing HTML element's text node with the ID of fullName

document.querySelector('#fullname').innerHTML = fullname(firstname, lastname);
