// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
    // Access the form and its elements
  const form = document.getElementById('password-options-form');
  const passwordLength = parseInt(form.elements['password-length'].value);
  const includeLowercase = form.elements['include-lowercase'].checked;
  const includeUppercase = form.elements['include-uppercase'].checked;
  const includeNumbers = form.elements['include-numbers'].checked;
  const includeSpecial = form.elements['include-special'].checked;
  const errorMessage = document.getElementById('error-message');
}
// Check for valid password options
  if (
    isNaN(passwordLength) ||
    passwordLength < 8 ||
    passwordLength > 128 ||
    (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial)
  ) {
    alert('Please select valid password options.');
    return null;
  }

  // Return an object with password options
  return {
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSpecial,
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];

}

// Function to generate password with user input

function generatePassword() {
  const passwordOptions = getPasswordOptions();
  
  if (!passwordOptions) {
      return '';
    }
  
    const { passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSpecial } = passwordOptions;

  let validChars = '';

  if (includeLowercase) validChars += lowerCasedCharacters.join('');
  if (includeUppercase) validChars += upperCasedCharacters.join('');
  if (includeNumbers) validChars += numericCharacters.join('');
  if (includeSpecial) validChars += specialCharacters.join('');

  if (validChars === '') {
    alert('Please select at least one character type.');
    return '';
  }

  let password = '';

  for (let i = 0; i < passwordLength; i++) {
    password += getRandom(validChars);
  }

  return password;
}


// Toggle password options visibility
function toggleOptions() {
  var optionsDiv = document.querySelector('.options');
  optionsDiv.style.display = optionsDiv.style.display === 'none' ? 'block' : 'none';
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
