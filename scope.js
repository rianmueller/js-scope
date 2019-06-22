// Fill in the closeLid and openLid functions to set the isCookieJarOpen variable to false or true respectively.
let isCookieJarOpen = null;

function closeLid() {
  isCookieJarOpen = false;
}

function openLid() {
  isCookieJarOpen = true;
}

// Fill in the return value for the inner function to return a string, 'Hello World' using only the variables provided
// in both inner and outer functions
function outerFunction() {
  let hello = 'Hello';

  function innerFunction() {
    let world = 'World';
    return hello + ' ' + world;
  }
  return innerFunction();
}

// This is a function that takes in a 2d-array (or matrix) and returns the sum of all elements
// It's broken due to count variables colliding into each other.  Fix it!
function addMatrixElements(matrix) {

  let result = 0;

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      result = result + matrix[i][j];
    }
  }
  return result;
}

// This function is returning the wrong userObject data. It should be returning
// Neo's information and not Morpheus'.  Fix it!
function sendDataToClient() {

  let userObject = {
    handle: 'neo',
    authenticated: false
  }

  function authenticateUser(obj, username) {
    let userObject = {
      handle: 'morpheus',
      authenticated: false
    };

    if (obj.handle === username) {
      obj.authenticated = true;
      return obj
    } else {
      return userObject
    }
  }
  authenticateUser(userObject, 'neo')
  return userObject
}